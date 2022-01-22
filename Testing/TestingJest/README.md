## Jest Testing Overview
Use Jest for Unit and Integration Testing.
> React Ref: https://jestjs.io/docs/tutorial-react

### Jest Object:
> Reference https://jestjs.io/docs/jest-object

### Mocking:
> Reference: https://jestjs.io/docs/mock-function-api

> create a mock function with jest.fn(). for no implementation return undefined 
```js
const mockFn = jest.fn()
```
> mockFn.mock.calls | return array of called arguments
```js
const mockFn = jest.fn().mockImplementation(scalar => 42 + scalar);
// or: jest.fn(scalar => 42 + scalar);

const a = mockFn(0);
const b = mockFn(1);

a === 42; // true
b === 43; // true

mockFn.mock.calls[0][0] === 0; // true
mockFn.mock.calls[1][0] === 1; // true
```
Note: jest.fn(implementation) is a shorthand for jest.fn().mockImplementation(implementation)

### Global and Lifecycles Methods:
> Reference: https://jestjs.io/docs/api