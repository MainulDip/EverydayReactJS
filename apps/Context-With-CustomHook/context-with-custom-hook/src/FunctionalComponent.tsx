import React, { useContext } from 'react'
import ClassContextComponent from './ClassComponent'
import { ThemeContext, ThemeUpdateContext } from './ThemeContextCustomHook'

export default function FunctionContextComponent () {
  const darkStyles = useContext(ThemeContext)
  const toggleTheme = useContext(ThemeUpdateContext)
  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={ClassContextComponent.prototype.themeStyles(darkStyles)}>
        Functional Component Using Context API
      </div>
    </>
  )
}