import { apiGatewayEventMock, contextMock } from '@schedulino/aws-lambda-test-utils';
import { APIGatewayProxyResult } from 'aws-lambda';
import { main as hello } from 'src/handlers/hello/handler';
import { helloStub } from 'tests/stubs/hello.stub';

const executeHelloHandler = (body: string | null = null): void | Promise<APIGatewayProxyResult> => {
  const context = contextMock();
  const apiGatewayEvent = apiGatewayEventMock();
  context.functionName = 'hello';
  apiGatewayEvent.body = body;

  return hello(apiGatewayEvent, context, jest.fn());
};

const checkResponseWithErrors = (response: void | APIGatewayProxyResult, errorCode: string, reprocessable: boolean) => {
  expect(response && response.statusCode).toStrictEqual(400);
  expect(response && typeof response.body).toBe('string');

  const body = response ? JSON.parse(response.body) : {};

  expect(body).toHaveProperty('errorCode');
  expect(body).toHaveProperty('reprocessable');
  expect(body.errorCode).toStrictEqual(errorCode);
  expect(body.reprocessable).toStrictEqual(reprocessable);
};

describe('hello function', () => {
  it('should be define', () => {
    expect(hello).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof hello).toBe('function');
  });

  it('when the event body is valid, it will return a successful response.', async () => {
    const body = JSON.stringify(helloStub);
    const response = await executeHelloHandler(body);

    expect(response && response.statusCode).toStrictEqual(200);
    expect(response && typeof response?.body).toBe('string');
  });

  // eslint-disable-next-line jest/expect-expect
  it('when the event body is null, it will return a response with error.', async () => {
    const response = await executeHelloHandler(null);

    checkResponseWithErrors(response, '1', false);
  });

  // eslint-disable-next-line jest/expect-expect
  it('when the event body is not JSON, it will return a response with error.', async () => {
    const response = await executeHelloHandler('ssss');

    checkResponseWithErrors(response, '3', false);
  });

  // eslint-disable-next-line jest/expect-expect
  it('when the event body is not expected, it will return a response with error.', async () => {
    const body = JSON.stringify({ dummy: 'Matias' });
    const response = await executeHelloHandler(body);

    checkResponseWithErrors(response, '3', false);
  });
});
