import { contextMock } from '@schedulino/aws-lambda-test-utils';
import createEvent from '@serverless/event-mocks';
import { Callback } from 'aws-lambda';
import { main as world } from 'src/handlers/world/handler';
import { PromisesRejectedException } from 'src/framework/exceptions/business/promisesRejectedException';
import { worldStub } from 'tests/stubs/world.stub';

const executeWorldHandler = async (callback: Callback, data: Array<string | null> | string | null = null): Promise<void> => {
  const context = contextMock();
  context.functionName = 'world';

  let Records;

  if (Array.isArray(data)) {
    Records = data.map((body) => {
      return { body };
    });
  } else {
    Records = [
      {
        body: data,
      },
    ];
  }

  const eventData = {
    Records,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const sqsEvent = createEvent('aws:sqs', eventData);
  await world(sqsEvent, context, callback);
};

describe('world function', () => {
  it('should be define', () => {
    expect(world).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof world).toBe('function');
  });

  it("when all records have 'body' attribute with valid data, then it will return a successful response.", async () => {
    const data = [JSON.stringify(worldStub)];

    const callback = jest.fn();
    await executeWorldHandler(callback, data);
    // eslint-disable-next-line jest/prefer-called-with
    expect(callback).toHaveBeenCalled();
  });

  it("when at least one record has the 'body' attribute with null value, then it will return a successful response.", async () => {
    const callback = jest.fn();

    const data = [null, JSON.stringify(worldStub)];

    await executeWorldHandler(callback, data);
    expect(callback).toHaveBeenCalledWith(expect.any(PromisesRejectedException));
  });

  it("when at least one record has the 'body' attribute with invalid JSON format, then it will return a successful response.", async () => {
    const callback = jest.fn();

    const data = ['sdd', JSON.stringify(worldStub)];

    await executeWorldHandler(callback, data);
    expect(callback).toHaveBeenCalledWith(expect.any(PromisesRejectedException));
  });

  it("when at least one record has the attribute 'body' with data that does not respect the schema, it will return a successful response.", async () => {
    const callback = jest.fn();

    const data = [JSON.stringify({ dummy: 'Matias' }), JSON.stringify(worldStub)];

    await executeWorldHandler(callback, data);
    expect(callback).toHaveBeenCalledWith(expect.any(PromisesRejectedException));
  });
});
