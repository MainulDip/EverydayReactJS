### fn.bind() in React:
```jsx
/**
 * bind send the fn as object as last parameter of the receiver functions.
*/
function Square() {
  const value = 7;
  function handleClick(val, e) {
    e.preventDefault()
    alert(`Hi: value = ${val} and e.target.localName = ${e.target.localName}`)
    // console.log(...args)
    // inspect all the args with destructuring params
  }

  return <button className="square" onClick={handleClick.bind(this, value)}>{value}</button>;
```
### Native fn.bind() | Function.prototype.bind():
The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

```js
"use strict";

// note: with named argument, this will be available as last argument
function log(...args) {
  console.log(this, ...args);
  console.log(this[0], this[1])
}

log(1,2,2) // `this` is the global Window object here, as there are no bound happened
const boundLog = log.bind("this value", 1, 2); // the first arg (thisArg) will be the value of `this` 
const boundLog2 = boundLog.bind("new this value", 3, 4); // newly bound thisArg value will be ignored
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6

const boundArr = log.bind([7,6])
boundArr()

/*
Window {window: Window {...}, self: Window ...} 1 2 2
undefined undefined

String {0: "t", 1: "h", 2: "i", 3: "s", 4: ...} 1 2 3 4 5 6
t h

(2) [7, 6]
7 6
*/
```
### JS Closures:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures.
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

### Pure Function:
* Pure Fn does not change any objects or variables out of its scope.
* Same inputs, same output. Given the same inputs, a pure function should always return the same result.

### Immutable Array/Object Update:
```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

const arr = ['a', 'b']
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c')

// or, we can make a copy of the original array:
const arr3 = arr.slice()
// and mutate the copy:
arr3.push('c')
```

### Closure | Curried | Currying | Multiple chained Arrow fn:
Closure can be called using `fn(v)(f)` way.

```js
const checkIfOdd = (amount) => (dispatch) => {
  const currentValue = amount;
  if (currentValue % 2 === 0) {
    return dispatch(`${amount} is an even value`);
  } else {
    return dispatch(`${amount} is an odd value`);
  }
};

const d = (i) => { console.log(i) }
checkIfOdd(12)(d)
checkIfOdd(7)((i)=> console.log(i))
checkIfOdd(4)(console.log)
```

More simpler example
```js
const someFun = (a) => (b) => {
  let c = b(a)
  return c
}

someFun('Hello world')(d)
```
* TypeScript makes more Scene

```ts
// converting above fn in TS
const someFun = (a: any) => (b: (a: any) => any) => {
  let c = b(a);
  return c;
};
```

* Curried | Currying Function : https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript

```js
// arrow currying fn
const addArrow = x => y => x + y
// non-arrow
const addRegular = function (x) {
  return function (y) {
    return x + y
  }
}

addArrow(3)(4) // reruns 7
```
###  Async Function and Await keyword prefix:
Usually Async functions are used to Handle Promise (alternate to promise.then.catch chaining), where there will be some delay for fetching data from server or for other computation.
`await` keyword before the function call stop code execution further until that return something (resolved/reject).

```js
function resolveAfter2Seconds() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

// with arrow fn `const asyncCall = async () => {}`
async function asyncCall() {
  console.log('calling');
  // await will halt the execution untill resolved
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// output
// "calling"
// "resolved"
```

### Promise and Fetch API:
`Promise` in JS handles asynchronous operations, providing better control over the flow of code. Fetch is a promise base API and hence return a promise.

```ts
const myPromise: Promise<string> = new Promise( function (resolve, reject) {
  // This Promise resolves to a string
  setTimeout(() => {
    resolve('resolved');
  }, 2000);
});

myPromise.then((value) => {
  console.log('Promise resolved with value: ' + value);
})
.catch((error) => { // if rejected is called, catch block will be executed
  console.error('Promise rejected with error: ' + error);
});
```

Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

### Currying Functions:
It is a technique in functional programming, that transforms the function of multiple arguments into several `functions of a single argument` in sequence. 
```js
function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6)); // 120
```

### Destructuring Assignment (unpack values from arrays and object):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
```js
// Object Destructuring
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

const { name, realName } = hero;
console.log(name);     // => 'Batman',
console.log(realName); // => 'Bruce Wayne'

// Array Destructuring
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a,b); // 10 20
console.log(rest); // Array [30, 40, 50]
console.log(...rest) // 30 40 50

// Array Destructuring From Promise.all([])
const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ])
```

### Dynamic Variable Naming:
```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};

const prop = 'name';
const { [prop]: name } = hero;

console.log(name); // => 'Batman'
```


### Topic Refresh:
- Promise, Fetch, Async/Await, Futures
- JSON Encoding/Decoding, Axios, Ajax
- Node.js and Express REST implementation