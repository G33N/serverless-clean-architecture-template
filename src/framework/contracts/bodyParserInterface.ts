export interface BodyParserInterface<T> {
  (rawBody: any): T;
}
