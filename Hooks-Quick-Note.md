## React Hooks Cheat:
Personalized Cheat With Mini Doc and Go To Links

### Call only on top level functional Component
```js
function App(){
    uesEffect();
    // Not in nested/custom function
    // Not in jsx return block
    // Custom Hooks are exception to these rules
}
```

### useState()
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

### useEffect | Functional and Old React Class-Component:
```js
useEffect( () => {}, [] )
// Function and Dependencies is the useEffect's arguments
// Fn will run when mounted and if specified state changed in the dependence array
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

### createContext & useContext:
share data without passing props. useContext replates the Consumer API with cleaner code
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


### useRef():
creates Mutable object that keeps the same reference between re-renders and also, useRef is completely separated from component render cycle

Note: uses to grab native HTML elements from jsx, and store previous state value
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

### useReducer:
```js
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
```

### useMemo:
Used for Memorization of function's result. `useMemo` calls its function and returns the result and cached. Used for expensive computation

* Note: `useMemo` to memoizing values and `memo` for Component memoizing

```js
const [count, setCounet] = useState(77777777777)
const expensiveComputation = useMemo( () => {
    return count ** 77777777777777
} [count])

```
### useCallback:
`useCallback` returns its function uncalled, so can be called later when the state dependencies changes. 

Memorize the entire function to prevent unnecessary rerenders and fixes performance issues. 
```tsx
function Parent({ ... }) {
  const [a, setA] = useState(0);
  const onPureChange = useCallback(() => {doSomething(a);}, []);
  ... 
  return (
    ...
    <Pure onChange={onPureChange} />
  );
}
```

### useMemo(fn, [deps]) vs useCallback(fn, [deps]):
`useCallback` returns its function uncalled it can be called later, while useMemo calls its function and returns the result.

```tsx
function foo() {
  return 'bar';
}

const memoizedCallback = useCallback(foo, []);
const memoizedResult = useMemo(foo, []);

memoizedCallback;
// ƒ foo() {
//   return 'bar';
// }
memoizedResult; // 'bar'
memoizedCallback(); // 'bar'
memoizedResult(); // 🔴 TypeError
```

### useImparativeHandle:
uses useRef and forwardRed. Helps access and control custom developed component libraries
```js
// Button.js
function Button(props, refs){
    const count = useRef(null)
    const clickIt = ()=> 'something'
    // useImperativeHandle modify the exposed ref
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

### useLayoutEffect:
Will run after rendering component but before ui paints. Blocks visual updates until callback is completed
```js
useLayoutEffect(()=>{
    const rect = button.getBoundingClientRect()
    console.log(rect)
})
// It will run after the component render but before UI get updated/painted
```

### Custom Hooks:
Custom Hooks are for re-usability purpose and also to hide the gnarly details of the underlying logic. To expresses intent, not the implementation.
```js
// defining a custom hook.
// return the state at the end to read from other component.
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}


// use the custom hook form other component
function StatusBar() {
  const isOnline = useOnlineStatus(); // custom hook 😀
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
```

### useDebugValue:
`useDebugValue( () => {}, [] )`, used for Custom Hooks, and to add custom label

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