import { useState } from 'react'
import * as React from 'react';


/**
 * the default value with createContext will be used
 * when any component is not wrapped with the Context.Provider
 * but call useContext(Context) inside of them
 */
export const ThemeContext = React.createContext(false)
export const ThemeUpdateContext = React.createContext(()=>{})

// {/*  */}

type Props = {
    children?: string | JSX.Element | JSX.Element[] | React.ReactNode
    // children: React.ReactNode // will also work
  }

export function ThemeProvider ({ children }: Props ) {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme () {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
