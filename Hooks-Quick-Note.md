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


### Additional Hook

>1: useRef() | creates Mutable object that keeps the same reference between re-renders and also, useRef is completely separated from component render cycle

Note: Best usecase => grab native HTML elements from jsx, and store previous state value
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

>1: useReducer() | Little like Redux way of state management
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

>1: useMemo( () => {}, []) | Memorization | cache result/return of function call | Use only for expensive coputation
```js
const [count, setCounet] = useState(77777777777)
const expensiveComputation = useMemo( () => {
    return count ** 77777777777777
} [count])
// it will only rerender is 'count' state update. Somewhat like the useEffect pattern
```

>1: useCallback( () => {}, [] ) | Memorize the entire function to prevent unnecery rerenders
```js
const [count, setCounet] = useState(77777777777)
const showCount = useCallback(()=>{
    alert(`Count ${count}`)
}, [count])
// when same function is passed down to multiple chield components (Lists), using useCallback could prevent that.
```

>1: useImparativeHandle(ref, Fn) | uses useRef and forwardRed | Healps access and controle custom developed component libraries
```js
// Button.js
function Button(props, refs){
    const count = useRef(null)
    const clickIt = ()=> 'something'
    // useImperativeHandle modife the exposed ref
    useImperativeHandle(ref, ()=>({
        click: ()=>{
            console.log('clicking button')
            myBtn.current.click()
        }
    }))
    return <button ref={myBtn}>ClickMe {count.current}
    </button>
}
Const ButtonF = forwardRef(Button)
```

>1: useLayoutEffect( () => {}, [] ) | will run after component render but before ui paint | Blocks visual updates until callback is completed
```js
useLayoutEffect(()=>{
    const rect = button.getBoundingClientRect()
    console.log(rect)
})
// It will run after the component render but before UI get updated/painted
```

>1: useDebugValue( () => {}, [] ) | For Custom Hooks, add custom lable

> Custom Hooks and useDebugValue
```js
function App(){
    const [displayName, setDisplayName] = useState();
    useEffect((props)=>{
        const data = fetchFromDatabase(props.userId) // fetch data from a remote server
        setDisplayName(data.displayName)
    }, [])

    return <button>{displayName}<button/>
}

// To Make custom Hook create use[stateName] function outside of the component

function useDisplayName(){
    const [displayName, setDisplayName] = useState();
    useEffect((props)=>{
        const data = fetchFromDatabase(props.userId) // fetch data from a remote server
        setDisplayName(data.displayName)
    }, [])
    // useDebugValue will console log into react dev tool and show value
    useDebugValue(displayName ?? 'Loading.......')
    return displayName;
}



function App(){
    const displayName = useDisplayName()

    return <button>{displayName}<button/>
}
```