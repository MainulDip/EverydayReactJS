### fn.bind():
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
### JS Closures:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
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