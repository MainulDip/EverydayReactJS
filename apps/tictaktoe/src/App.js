export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="board-row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
    </div>
    <div className="board-row">
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  </>
  );
}

function Square({ value }) {

  function handleClick(val, e) {
    e.preventDefault()
    alert(`Hi: value = ${val} and e.target.localName = ${e.target.localName}`)
    // console.log(...args)
  }

  return <button className="square" onClick={handleClick.bind(this, value)}>{value}</button>;
}
