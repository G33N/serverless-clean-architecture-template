export interface UseCaseInterface<T> {
  (body: T): Promise<any>;
}
