import React, { Component, useContext } from 'react'
import { ThemeContext } from './App'

// another way of getting the Context, hooks are only allowed inside functional Component
const DarkTheme = () => useContext(ThemeContext)

export default class ClassContextComponent extends Component {
  themeStyles (dark: any) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem'
    }
  }

  /**
   * This is the recommended way with class component
   */
  /*
    render () {
      return (
        <ThemeContext.Consumer>
          {darkTheme => (
            <div style={this.themeStyles(darkTheme)}>Class Theme</div>
          )}
        </ThemeContext.Consumer>
      )
    }
  */

  // experimenting, maybe not recommended
  render (): React.ReactNode {
    return (
      <>
        <div style={this.themeStyles(DarkTheme)}>Class Theme</div>
      </>
    )
  }
}
