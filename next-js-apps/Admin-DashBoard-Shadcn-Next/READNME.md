### Overviews:
`npx shadcn@latest init`

with other files it will also create `components.json` in the root directory, which will hold app config info to used by Shadcn ui command runner (ie, when adding a component using the `npx shadcn@latest add <component-name>` command). Test a button component using `npx shadcn@latest add button`.


* when adding Shadcn/ui component, no need to restart server. Components will be available automatically (no magic, as the code for the component will be added inside src/app 's `/components/ui/` directory)

Docs: https://ui.shadcn.com/docs/installation/next

### VSCode tricks:
Open Current Directory In Current Windows `code -r .`
Show/Hide SideBar => win `ctrl+b`, mac `cmd+b`


### Font (Local/Google) with Next.js:
For Local Font, `import localFont from 'next/font/local'` method is used to make the configuration object.

`const customFont = localFont({src: "./local-font.woff2", variable: "--give-a-custom-name", style: "normal", weight: 300})`

For Google Font, `import { Inter } from 'next/font/google'` where Inter is the desired font name. Then configure it like `Inter({...})`.

Inject the configured font into element's className prop. Configured Font can be injected by 3 ways.
1. configuredFont.className
2. configuredFont.style
3. configuredFont.variable (if `variable: '--font-inter'` is available in the configuration)

https://nextjs.org/docs/pages/api-reference/components/font

### JS logical OR (||) vs Nullish coalescing operator (??):
If left is a falsy value, logical OR will return the right value, where Nullish coalescing operator will return the left (as its not null).

* `??` will only skip `null` and `undefined`. Will not skip falsy values ex: `""`, `0`, `false` etc like the logical OR. 

```js
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```


### Next.js Routing vs Expo Router:
Expo uses `_layout.tsx` and Next.js uses `layout.tsx`
Expo defines multiple files inside a directory as separate routes, where Next uses only `page.tsx` as route file for a directory.

Any file other than `layout.tsx` and `page.tsx` (also `template`, `error`, `loading`, `not-found`) are considered collocated file (components, styles, tests, ect). Docs https://nextjs.org/docs/app/building-your-application/routing#colocation

Next's `Route Group` is kinda same as `Shared Route` in Expo
Next's `dynamic route` is kinda same as Expo's Dynamic route.