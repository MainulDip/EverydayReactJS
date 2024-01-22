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

### CSS Modules:
CSS Modules are an optional feature and are only enabled for files with the `.module.css` extension.

CSS Modules locally scope CSS by automatically creating a unique class name. 
### Next from NextJS:
1. NodeJS Vanilla implementation
2. NodeJS with handlebar monolithic server
3. Express Standalone
4. Prisma and Sequelize ORM