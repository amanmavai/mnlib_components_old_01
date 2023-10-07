```sh
$ npm i -D tsup

$ touch src/index.ts

$ npm i -D typescript
$ npm i -D react react-dom @types/react @types/react-dom

# use tailwind cli to generate styles.css file and put this inside public dir, so that build system copies it to dist folder
$ npm install -D tailwindcss
$ npx tailwindcss init

$ npx tailwindcss -i ./src/styles/tailwind.css -o ./public/styles.css

$ npm i -D prettier prettier-plugin-tailwindcss

$ npm init stylelint

# eslint
$ npm init @eslint/config
$ npm i -D eslint-config-prettier

# tailwind related
$ npm i -D tailwindcss-animate
$ npm i class-variance-authority clsx tailwind-merge
# icon lib
$ npm install lucide-react
# use cli to add shadcn components
$ npx shadcn-ui@latest init

# add button component from shadcn ui
$ npx shadcn-ui@latest add button


```
