## React Hooks Cheat:
Personalized Cheat With Mini Doc and Go To Links

> Call only on top level fuctional Componet
```js
function App(){
    uesEffect();
    // Not in nested/custom function
    // Not in jsx return block
    // Custom Hooks are exception to these rules
}
```

### Basic Hooks:

>1: useState()
```js
const [text, setText] = useState(initialValues)
// where text is getter and setText() is setter

// Class Based Component Alternative
class Btn extends React.Component {
    constructor(props){
        super(props);
        this.state = {...initialValue}
    }

    render () {
     return (
      <button onClick={ () => { this.state.key1 + Modification } }>
        {this.state.key2}
      </button>
     )
    }
}
```

>1: useEffect( () => {}, [] )
```js
useEffect( () => {}, [] )
// Function and Dependencies is the useEffect's agruments
// Fn will run when mounted and if specified state changed in the dependencie array
// If dependency array is empty, it will run only once when mounted
// Can Use multiple useEffect hooks in the same component
// return Function will be called when component is removed like

useEffect( () => {
    return () => alert('Goodbye Component')
}, [] )
// Class Based Component Alternative
class Btn extends React.Component {
    constructor(props){
        super(props);
        this.state = {...initialValue}
    }

    componentDidMount(){
        // Component Initialized
    }
    
    componentDidUpdate(){
        // State Updated
    }

    componentWillUnmount(){
        // Component removed/unmounted
    }

    render () {
     return (
      <button onClick={ () => { this.state.key1 + Modification } }>
        {this.state.key2}
      </button>
     )
    }
}
```

>1: createContext() & useContext( () => {}, [] ) | share data without passing props
```js
// App.js
const moods = {
    happy: ':)',
    sad: ':('
}

const MoodContext = createContext(moods)

function App(props){
 return (
  <MoodContext.Provider value={moods.happy}>
      <Childcomponent /> 
      // Child component can inherit context value without props drilling
  <MoodContext.Provider />
 )
}

// Childcomponent.js

function Chieldcomponent(){
    const mood = useContext(MoodContext)
    return (
    <div>
        {mood}
        <button onClick={ () => /* change context value */}>Change Mood<button/>
    </div>
    )

    // Old Version
    return (
    <MoodContext.Consumer>
        {mood}
        <button onClick={ () => /* change context value */}>Change Mood<button/>
    <MoodContext.Consumer />

    // useContext is the cleaner replacement of the Consumer API
}
```


### Additional Hooks

>1: useRef() | creates Mutable object that keeps the same reference between re-renders

Note: Best usecase => grab native HTML elements from jsx 
```js
// App.js
const myBtn = useRef(null)
const clickIt = () => myBtn.current.click()
return <button ref={myBtn}>ClickMe</button>
// App2.js
const count = useRef(0)
const clickIt = 
return <button onClick={ () => () => count.current++ }>ClickMe {count.current}
</button>
// But clicking the button will not change UI because useRef does not re-render like setState
```

>1: useReducer()
```js
// App.js
function App(){
const [state, dispatch] = useReducer(reducer, initialStateValue);
return (
 <>
  Count: {state}
  <button onClick={() => dispatch({type: 'decrement'})}> Minus </button>
  <button onClick={() => dispatch({type: 'increment'})}> Plus </button>
 </>
 )
}

// reducer.js
function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return: state - 1;
        default:
            throw new Error();
    }
}
```

>1: useState( () => {}, [] )

>1: useState( () => {}, [] )

>1: useState( () => {}, [] )

>1: useState( () => {}, [] )

>1: useState( () => {}, [] )