### nextjs-dashboard Overviews:

### Bare bone directory structure:
`/app:` Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
`/app/lib:` Contains functions used in your application, such as reusable utility functions and data fetching functions.
`/app/ui:` Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
`/public:` Contains all the static assets for your application, such as images.
`/scripts:` Contains a seeding script that you'll use to populate your database in a later chapter.
`Config Files:` You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

### Initial Data | hardcoded or Mock ReST API:

### Prisma ORM (Recommended):
Prisma will automatically generate TypeScript types based on the database schema.

### Styling Options:
- tailwind
- css modules
- styled-jsx
- styled-components
- emotion

### CSS Modules:
CSS Modules are an optional feature and are only enabled for files with the `.module.css` extension.

CSS Modules locally scope CSS by automatically creating a unique class name. 
```css
/* style-file.module.css */
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

```js
// import all the content by a name, and call rules by that name from a component
import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />;
```

### `clsx` lib for toggle classnames:
`clsx` is a library that lets toggle classnames easily (`clsx(otherClasses, {"classF": a === b, "classS": c === d})`)

```js
<span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
```

### `next/font/...` module:
Next.js automatically optimizes fonts those are hooked by `next/font/...` modules.

- font adding workflow => import the font form `next/font/...` module, configure and export. Then use that font in components `className` field. Global font's are hooked inside layout's body tag.

```js
// app/ui/fonts.to
import { Inter } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });

// add in layout component
import { inter } from '@/app/ui/fonts';

export default function RootLayout({children}) {
    return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
    )
}
```

### `<Image />` Component (optimized):
The <Image> Component is an extension of the HTML <img> tag, and comes with automatic image optimization. Like `Prevent layout shift`, `image resize for mobile/desktop`, `lazy loading` and `WebP/AVIF`

`src` and `alt` are required props for hooking local images

* Remote/Network Fetched image's src property should be a URL string, also `width`, `height` are required and optional `blurDataURL` needs to be injected manually.

* there are also `loader` function/prop for per image and for application level with `loaderFile configuration`.

docs -> https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images
docs -> https://nextjs.org/docs/app/api-reference/components/image

```ts
// Image Component Demo
// other imports
import Image from 'next/image'
import img_hero_desktop from './../public/hero-desktop.png';
import img_hero_mobile from './../public/hero-mobile.png';
 
export default function Page() {
  return (
    <>
      <Image
        src="hero-desktop.png" // will auto pick form public directory
        alt="Picture of the author"
        // width={500} automatically provided with local images
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        className="hidden md:block" // hide on mobile (from tailwind css)
      />


      // when on mobile, this will be shown instead of desktop

      <Image
        src={img_hero_mobile} // will auto pick form public directory
        alt="Picture of the author"
        className="block md:hidden" // hide on desktop (from tailwind css)
      />
    </>
  )
}
```

### Routing System (API Routes):
Next.js uses file-system routing where folders are used to create nested routes. Each folder inside `app` directory map to a URL. `page.tsx` is the landing page for each directory. Also each directory can have its own `layout.tsx` file.

* when there is a `layout.tsx`, the `page.tsx` will be injected as layout's props.children automatically

Only `page.tsx` file is accessible as home URL for that directory. So UI components and other re-usable file can live in that directory without conflict.

```tsx
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div> <SideNav/> </div>
            <div> { children } </div>
        </>
    )
}
```

* on navigation by `Link` component, only the children (`page.tsx`) components updates while the layout.tsx won't re-render. Which is `partial rendering` (https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#3-partial-rendering)


### RootLayout (Required For Root Level Home/Landing app/layout.tsx):
RootLayout is shared across all pages. It provide access to modify `<html>` and `<body>` tags

### Next from NextJS:
1. NodeJS Vanilla implementation
2. NodeJS with handlebar monolithic server
3. Express Standalone
4. Prisma and Sequelize ORM