import React, { useContext } from 'react'
import ClassContextComponent from './ClassComponent'
import { useThemeContextHook, useThemeUpdateContextHook } from './ThemeContextCustomHook'

export default function FunctionContextComponent () {
  // using custom hook to fetch the contexts
  const darkStyles = useThemeContextHook()
  const toggleTheme = useThemeUpdateContextHook()
  
  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={ClassContextComponent.prototype.themeStyles(darkStyles)}>
        Functional Component Using Context API
      </div>
    </>
  )
}