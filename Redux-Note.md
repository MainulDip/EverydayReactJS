### Setup:
> Mast Read Initial Overviews from https://redux.js.org/tutorials/essentials/part-1-overview-concepts
> TS: https://redux.js.org/usage/usage-with-typescript

## Redux Overviews:
Redux is a pattern and library for managing and updating application state, using events called `actions`. 

It serves as a centralized store for state that needs to be used across the entire application, with rules ensuring that the state can only be updated in a predictable fashion.

* Quick Redux Process:
- Actions are plain objects with a `type` field, and it describe "what happened" in the app
- Reducers are functions that calculate a new state value based on previous state + an action. Usually implemented with `switch`
- A Redux store runs the root reducer whenever an action is dispatched

Redux commonly used together with 
`React-Redux` -> lets React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

`Redux-ToolKit` -> RTK includes utilities that help simplify many common use cases, including `store setup`, `creating reducers` and writing `immutable update` logic, and even creating entire `slices` of state at once. Redux (`core`) can be used without RTK, but RTL makes it easier. 

`Redux DevTools Extension` -> its a debug tool for redux and shows a history of the changes to the state in the store over time by `time-travel debugging`

### Terms and Concepts:
- `One Way Data Flow | Unidirectional Flow` -> state goes down and event goes up (only one way of transferring data). Vs Bidirectional Data Flow is like two-way-data-binding. Redux and React use Unidirectional Flow

- `immutable state update` -> make copies of existing objects/arrays, and then modify the copies using object `spread operators | ...obj`, as well as array methods (concat/slice) that return new copies of the array instead of mutating the original array. Redux expects that all state updates are done immutably.

### Redux (core) vs Redux Toolkit:
Redux (core) is
- `createStore` to actually create a Redux store
- `combineReducers` to combine multiple slice reducers into a single larger reducer
- `applyMiddleware` to combine multiple middleware into a store enhancer
- `compose` to combine multiple store enhancers into a single store enhancer

Redux Toolkit: Helps manage redux application by
- provide helper function (`createSlice`) that can replace manual reducer function which consist of `switch` statements, action creators and action type.
- a single function `configureStore` to setup store, combine reducers, adding thunk middleware and devTool integration. 
- `createSlice` with the help of `Immer library` makes writing immutable updates easier (ie, `state.value = 123`) instead of spread syntax. also it automatically generates `action creators` and `action types` for each reducer based on it's name internally. 

Redux Toolkit also provides
- `createAsyncThunk`: abstracts the standard "dispatch actions before/after an async request" pattern
- `createEntityAdapter`: prebuilt reducers and selectors for CRUD operations on normalized state
- `createSelector`: a re-export of the standard Reselect API for memoized selectors
- `createListenerMiddleware`: a side effects middleware for running logic in response to dispatched actions


### Example Using Toolkit vs Vanilla
When reducers are defined using `createSlice`, all `action creators` and `action types` are generated based on the reducer name
```js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer

// All of the action creators and action types are generated automatically
```

* `configureStore` example

```js
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})
```

* vs vanilla way of writing reducer function using switch and manual type setup

```js
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: id
})

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

// creating reducer function without using Redux Toolkit
```

### Store:
The current Redux application state lives in an object called the store. Best practice is to have a `single store` in a Redux application.

The Redux store is created using the configureStore function from Redux Toolkit. It requires a reducer or a `root reducer` (combination of multiple reducers) in its the reducer argument. 

Store has a method called getState that returns the current state value

* multiple stores can be applied using `a store per root component instance` manner, but is not recommended. 

```js
import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({ reducer: counterReducer })

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

console.log(store.getState())
// {value: 0}
```

### Actions with `type` and `payload` + Action Creators:
An action is a plain JavaScript object that has a `type` field (and optional `payload` field for additional info about the `type` event)...

the type field's signature is `"domain/eventName"` where `domain` is the feature or category that this action belongs to, and the `eventName` is the specific thing that happened.

* An `action creator` is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time

```ts
// an action
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

// an action creator
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducers:
A reducer is a function that `receives the current state and an action object`, decides how to update the state if necessary, and returns the new state (signature: `(state, action) => newState`). Its kind of an event listener which handles events based on the received action (event) type. It gets its name from `Array.reduce()` which returns the result based on its callback and initial state.

* Reducers must always follow some specific rules:

1. They should only `calculate the new state value` based on the state and action arguments
2. They are `not allowed to modify the existing state`. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
3. They `must not do any asynchronous logic` also will `not calculate random values`, and will `not do side effects`

```ts
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  // in production 
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

### Root Reducer:
A Redux store needs to have a single "root reducer" function passed in when it's created. Its a combination of different reducers. Combining of reducers can be done manually or using Redux's `combineReducers`.
```js
const store = configureStore({
  reducer: rootReducer
})

// Combining reducer with Redux's combineReducers Function
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})

// Can be combined using manually as well
function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
    posts: postsReducer(state.posts, action),
    comments: commentsReducer(state.comments, action)
  }
}
```

### Dispatch (`dispatching actions` == `triggering an event`):
`store.dispatch(action)` is the Redux store method. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value
```js
store.dispatch({ type: 'counter/increment' })
console.log(store.getState())
// {value: 1}

/* Dispatch with Action Creator */
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())
console.log(store.getState())
// {value: 2}
```

### Selectors and useSelector (exact value extractor fn from the store's current state and re-render UI is it's been changed)
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data
```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

### Initial Setup:
* A Redux store is created using a root reducer function
* The store calls the root reducer once, and saves the return value as its initial state
* When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.

### State Update Process:
- When some event is triggered, app code dispatches an action to the Redux store, like `store.dispatch({type: 'counter/increment'})`
- The store runs the (root) reducer function again with the previous state and the current action, and saves the return value as the new state
- The store notifies all parts of the UI that are subscribed that the store has been updated