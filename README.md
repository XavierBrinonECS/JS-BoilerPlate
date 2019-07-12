# JS-BoilerPlate
React toolkit for Front End so awesowe it glows in the dark

## Local setup

```bash
> git clone
> mv my-project my-cool-project
> cd my-cool-project
> npm i
```

then:

```bash
> npm start // in one tab
> npm t // in another tab
> npm storybook // in a 3rd tab
```

## Process

1. You can create the React Component, the CSS file, the Test file and the story file using one plop command:
   1. `npx plop rcts NameOfTheComponent`
2. The unit test simply check that the component is mounting.

## Folder structure

All the assets are in the `public/` folder.
All the magic happens in `src/` :

- The components should be created in `components/`, naming convention is _MyComp.tsx_
- The css is in the same folder, name _MyComp.css_ and you `import './MyComp.css'` in the MyComp.tsx component
- The test file is in the `__tests__` folder, naming convention is _MyComp.test.tsx_
- The story is created in `stories`, name is _MyComp.story.tsx_

