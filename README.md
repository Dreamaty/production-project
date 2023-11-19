## Запуск проекта

```
npm install - download dependencies
npm run start:dev or npm run start:dev:vite - run server and fronted in dev mode
```

---

## Скрипты

- `npm run start` - Run frontend on webpack dev server
- `npm run start:vite` - Run frontend on Vite
- `npm run start:dev` - Run frontend project on webpack dev
  server + backend
- `npm run start:dev:vite` - Run frontend project on Vite +
  backend
- `npm run start:dev:server` - Run the backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in development mode
- `npm run lint:ts`- Check TypeScript files with linter
- `npm run lint:ts:fix` - Check and fix TypeScript files with
  linter
- `npm run lint:scss` - Check SCSS files for style issues with
  linter
- `npm run lint:scss:fix` - Fix SCSS files for style issues with
  linter
- `npm run test:unit` - Run unit tests with Jest
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks

---

## Project Architecture

The project is written following the Feature Sliced Design
methodology.

Link to the documentation -
[feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in the public/locales directory.

For a more comfortable workflow, we recommend installing a plugin
for WebStorm/VSCode.

i18next Documentation -
[https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

The project uses three types of tests:

1. Regular unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing
   Library -`npm run test:unit`
3. End-to-end (e2e) testing with Cypress - `npm run test:e2e`

Learn more about testing in the
[ testing documentation](/docs/tests.md).

---

## Linting

The project uses ESLint for checking TypeScript code and
Stylelint for checking style files.

Additionally, for strict control of main architectural
principles, a custom ESLint plugin
_eslint-plugin-dreamatty-path-checker-plugin_ is used, which
includes three rules:

1. path-checker - prohibits the use of absolute imports within
   the same module.
2. layer-imports - checks the correctness of layer usage from the
   perspective of FSD (for example, widgets cannot be used in
   features and entities).
3. public-api-imports - allows importing from other modules only
   through the public API. It has auto-fix functionality.

##### Running Linters

- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter
- `npm run lint:scss` - Check SCSS files for style issues with
  linter
- `npm run lint:scss:fix` - Fix SCSS files for style issues with
  linter

---

## Storybook

For each component in the project, story cases are described.
Server requests are mocked using the storybook-addon-mock.

Story cases files are created next to the component with the
.stories.tsx extension.

You can run Storybook with the following command:

- `npm run storybook`

ПLearn more about [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Project Configuration

For development, the project contains two configurations:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted to the main features of the
application.

All configuration is stored in /config:

- /config/babel - babel
- /config/build - Webpack configuration
- /config/jest - Test environment configuration
- /config/storybook - Storybook configuration

In the `scripts` folder, you can find various scripts for code
refactoring, simplification, report generation, and more.

---

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in
/.github/workflows. In CI, all types of tests, project building,
Storybook building, and linting are performed.

Pre-commit hooks check the project with linters, and the
configuration is in /.husky.

---

### Working with Data

Data interaction is done using Redux Toolkit. Whenever possible,
reusable entities should be normalized using EntityAdapter.

Server requests are sent using
[RTK query](/src/shared/api/rtkApi.ts).

For async loading of reducers (to avoid bundling all of them),
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)
is used.

---

### Working with feature-flags

The use of feature flags is only permitted through the use of the
`toggleFeatures` helper.

It accepts an object with the following options:

```javascript
{
   name: 'the name of the feature flag',
   on: () => {
       // This function will execute after the feature is Enabled
   },
   off: () => {
       // This function will execute after the feature is Disabled
   }
}

To automatically remove a feature, use the remove-feature.ts script, which takes 2 arguments:

1)The name of the feature flag to be removed
2)The state ('on'/'off')

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
```
