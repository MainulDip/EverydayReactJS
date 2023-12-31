import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import ClassContextComponent from './ClassComponent'
import FunctionContextComponent from './FunctionalComponent'
import { ThemeProvider } from './ThemeContextCustomHook'

/**
 * the default value with createContext will be used
 * when any component is not wrapped with the Context.Provider
 * but call useContext(Context) inside of them
 */
// export const ThemeContext = React.createContext(false)

function App () {
  // const [darkTheme, setDarkTheme] = useState(false)
  // function toggleTheme () {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeProvider>
    </>
  )
}

export default App
