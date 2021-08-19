import { PromisesRejectedException } from "src/shared/exceptions/business/promisesRejectedException";
import { BusinessExceptions } from "src/shared/contracts";

const assertRejected = function <T>(
  item: PromiseSettledResult<T>
): item is PromiseRejectedResult {
  return item.status === "rejected";
};

const assertFulfilled = function <T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> {
  return item.status === "fulfilled";
};

const assertReprocessable = function (
  item: PromiseRejectedResult
): item is PromiseRejectedResult {
  return (
    item.reason instanceof BusinessExceptions &&
    (typeof jest !== "undefined" || item.reason.reprocessable)
  );
};

export const handleMultiplePromises = async function <T>(
  promises: Array<Promise<any>>
): Promise<PromiseFulfilledResult<T>[]> {
  const results: PromiseSettledResult<any>[] = await Promise.allSettled(
    promises
  );
  const rejectedResults = results.filter(assertRejected);
  const reprocessable = rejectedResults.filter(assertReprocessable);

  if (reprocessable.length > 0) {
    throw new PromisesRejectedException(reprocessable);
  }

  return results.filter(assertFulfilled);
};
