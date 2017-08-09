import { CALL_API } from 'redux-api-middleware';
import endpointMiddleware from '../endpointMiddleware';

describe('endpointMiddleware', () => {
  const endpoint = '/test-endpoint';
  const nextHandler = endpointMiddleware();

  it('should return a function to handle next', () => {
    expect(typeof nextHandler).toEqual('function');
  });

  it('should call next middleware with action', () => {
    const action = {};
    const next = jest.fn();
    nextHandler(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it('should prepend localhost and port to endpoint if it is a CALL_API action', () => {
    process.env.PORT = 3000;
    const action = {
      [CALL_API]: { endpoint },
    };
    const next = () => {};
    nextHandler(next)(action);
    expect(action[CALL_API].endpoint).toEqual(`http://localhost:${process.env.PORT}${endpoint}`);
  });
});
