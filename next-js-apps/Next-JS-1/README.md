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

### Next from NextJS:
1. NodeJS Vanilla implementation
2. NodeJS with handlebar monolithic server
3. Express Standalone
4. Prisma and Sequelize ORM