### Common Types:
```tsx
// type with default value of useContext.
export const ThemeContext = React.createContext(false)
export const ThemeUpdateContext = React.createContext(()=>{})
```
### Prop Types:
```tsx
type Props = {
//   children?: string | JSX.Element | JSX.Element[] | React.ReactNode // also work
  children: React.ReactNode // will also work
}

// function ThemeProvider ({ children }: { children?: React.ReactNode })

export function ThemeProvider ({ children }: Props ) {
  return ( <> {children} </> )
}
```

### Topic Refresh Using TypeScript:
- Promise, Fetch, Async/Await,
- JSON Encoding/Decoding, Axios, Ajax