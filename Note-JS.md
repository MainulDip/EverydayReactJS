### fn.bind():
```js
/**
 * bind send the fn as object as last parameter of the receiver fun
*/
function Square() {
  const value = 7
  function handleClick(val, e) {
    e.preventDefault()
    alert(`Hi: value = ${val} and e.target.localName = ${e.target.localName}`)
    // console.log(...args)
    // inspect all the args with destructuring params
  }

  return <button className="square" onClick={handleClick.bind(this, value)}>{value}</button>;
```
### JS Closures
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