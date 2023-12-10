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