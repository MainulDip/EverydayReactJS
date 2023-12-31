import React, { Component, useContext } from 'react'
import { ThemeContext } from './ThemeContextCustomHook'

export default class ClassContextComponent extends Component {
  themeStyles (dark: boolean) {
    return {
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem'
    }
  }

  /**
   * This is the recommended way with class component
   * With Functional Component, call get context using useContext
   * then inject directly 
   */
    render () {
      return (
        <ThemeContext.Consumer>
          { (darkTheme: boolean) => (
            <div style={this.themeStyles(darkTheme)}>Class Theme</div>
          )}
        </ThemeContext.Consumer>
      )
    }
}
