### Prop, State, Events and UniDirectional Data Flow:
In react, Props are immutable and States are mutable. Props are updated through state (which trigger re-render/re-composition of the component that consumes the prop). As props values are tied with state, we can call it `state` overall.

unidirectional data flow is -> state going down from parent to child component (as props) and events going up from child to parent (to update states).

### Context API with Custom Hook:

### useReducer with Context API

### Suspense:
<Suspense> lets you display a fallback until its children have finished loading

```js
<Suspense fallback={<Loading />}>
  <SomeComponent /> 
</Suspense>
```
Only Suspense-enabled data sources will activate the Suspense component. They include:

* Data fetching with Suspense-enabled frameworks like Relay and Next.js
* Lazy-loading component code with lazy
* Reading the value of a Promise with use

### Hydration (HydrateRoot):
hydrateRoot lets you display React components inside a browser DOM node whose HTML content was previously generated by react-dom/server.

The `react-dom/server` APIs let you render React components to HTML on the server. These APIs are only used on the server at the top level of your app to generate the initial HTML. A framework may call them for you. Most of your components don’t need to import or use them.

```js
import { hydrateRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = hydrateRoot(domNode, reactNode);
```

### use() hook
`use` is a React Hook that lets you read the value of a resource like a Promise or context.
```js
const value = use(resource);
```
### Lib `React Router`:

### Lib `@heroicons/react`:
Its a svg icon library where each icon can be imported individually as a React component.

Docs -> https://heroicons.com/outline

```jsx
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```

### Lib `clsx` for Conditional Class:

```jsx
<Link
  key={link.name}
  href={link.href}
  className={clsx(
    'flex h-[48px]',
    {
      'bg-sky-100 text-blue-600': pathname === link.href,
    },
  )}
>
  <p className="hidden md:block">{link.name}</p>
</Link>
```

* clsx uses with different data types 

```js
import clsx from 'clsx';
// or
import { clsx } from 'clsx';

// Strings (variadic)
clsx('foo', true && 'bar', 'baz');
//=> 'foo bar baz'

// Objects
clsx({ foo:true, bar:false, baz:isTrue() });
//=> 'foo baz'

// Objects (variadic)
clsx({ foo:true }, { bar:false }, null, { '--foobar':'hello' });
//=> 'foo --foobar'

// Arrays
clsx(['foo', 0, false, 'bar']);
//=> 'foo bar'

// Arrays (variadic)
clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]);
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
clsx('foo', [1 && 'bar', { baz:false, bat:null }, ['hello', ['world']]], 'cya');
//=> 'foo bar hello world cya'
```

### Lib `dotenv`:
It's a secrets manager for .env files. Run inside app using `require("dotenv").config()` or `import "dotenv/config"`
NextJS guide => https://www.dotenv.org/docs/frameworks/nextjs/github-actions.......
```sh
# put this in a .env file
NEXT_PUBLIC_HELLO="World"
```
```json
// and put this inside script of package.json
"seed": "node -r dotenv/config ./scripts/seed.js"
```

### Next Task Todo:
1. https://react.dev/blog/2023/03/16/introducing-react-dev#learn-react-step-by-step....