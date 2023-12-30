## Everyday ReactJS Overviews:

Updated and personalized mini practical documentation regarding React.js library. Topics: React Testing Libraries, React Hooks, Context API, Router, Redux and TS React itself on practical level.

### Integration of TypeScript With an Existing Project:
See - <a href="./apps/tictaktoe-typescript/">TicTacToe TypeScript</a>



```jsx
﻿// ClassComponent.js
import React, { Component } from 'react'
import { ThemeContext } from './App'
export default class ClassContextComponent extends Component { themeStyles (dark) {
return {
backgroundColor: dark? '#333' : '#CCC',
color: dark? '#CCC' : '#333',
padding: '2rem',
margin: '2rem'
}
}
render() {
return (
<ThemeContext.Consumer>
{darkTheme => {
}}
return <div style={this.themeStyles(darkTheme)}>Class
Theme</div>
</ThemeContext.Consumer>
>
```

```jsx
﻿// Functional Component.js
import React from 'react'
export default function FunctionContextComponent() {
return (
>
<div>Function Theme</div>
}
```

```jsx
// App.js
import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent' import ClassContextComponent from './ClassContextComponent'
export const ThemeContext = React.createContext()
export default function App() {
const [darkTheme, setDarkTheme] = useState(true)
function toggleTheme() {
}
setDark Theme (prevDarkTheme => !prevDarkTheme)
return (
<>
<ThemeContext. Provider value={darkTheme}>
<button onClick={toggleTheme}>Toggle Theme</button>
<FunctionContextComponent />
<ClassContextComponent />
</ThemeContext.Provider>
</>
)
}
```