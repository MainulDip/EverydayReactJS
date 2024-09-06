### Overviews:
`npx shadcn@latest init`

with other files it will also create `components.json` in the root directory, which will hold app config info to used by Shadcn ui command runner (ie, when adding a component using the `npx shadcn@latest add <component-name>` command). Test a button component using `npx shadcn@latest add button`.


* when adding Shadcn/ui component, no need to restart server. Components will be available automatically (no magic, as the code for the component will be added inside src/app 's `/components/ui/` directory)

Docs: https://ui.shadcn.com/docs/installation/next