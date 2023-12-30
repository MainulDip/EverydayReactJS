import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import ClassContextComponent from './ClassComponent'
import FunctionContextComponent from './FunctionalComponent'

export const ThemeContext = React.createContext(false)

function App () {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme () {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}

export default App
