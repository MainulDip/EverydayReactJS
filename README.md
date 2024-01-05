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
```
### Tasks:
1. Redux 001 and React-Redux Official Tutorial + useReducer with Context API.
2. Expo React-Native official Quick Tutorial + React Native Router Deep Dive
3. Expo Job Board App
4. Next.js and Gatsby.js official tutorials (update the old knowledge and get familiar with current workflow) and all in TS
5. Next.js Threads (later implement on RN, SwiftUI and JetPack Compose)
6. Dive Deeper Into Expo
7. `React Native Cli` and `Expo prebuild` also Native Modules and Component implementation