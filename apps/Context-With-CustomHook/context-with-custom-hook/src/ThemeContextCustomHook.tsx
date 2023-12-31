import { useState } from 'react'
import * as React from 'react'

/**
 * the default value with createContext will be used
 * when any component is not wrapped with the Context.Provider
 * but call useContext(Context) inside of them
 */
export const ThemeContext = React.createContext(false)
const ThemeUpdateContext = React.createContext(() => {})

/**
 * Using Custom Hooks to inject ThemeContext and ThemeUpdateContext that
 * can be assessable form anywhere
 * its nothing but wrapping the `useContext` call/return with another function and return the context variable
 */
export const useThemeContextHook = () => React.useContext(ThemeContext)
export const useThemeUpdateContextHook = () => React.useContext(ThemeUpdateContext)

export function ThemeProvider ({ children }: Props ) {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme () {
    setDarkTheme( previousState => !previousState )
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}


type Props = {
    children?: string | JSX.Element | JSX.Element[] | React.ReactNode
    // children: React.ReactNode // will also work
  }