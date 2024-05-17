# Tech Repair Company Website

This is a static website for a tech repair company that provides services for fixing laptops, computers, motherboards, and printers. The website is built using React, TypeScript, and Vite, with UI components from ShadcnUI and Acenternity UI. It has been customized to fit the needs and branding of the company.

The website also integrates with EmailJS for sending emails, allowing customers to easily get in touch with the developer.

## Tech Stack

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that adds static types.
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- ShadcnUI: A UI library that provides a set of high-quality React components.
- Acenternity UI: Another UI library that offers a wide range of customizable components.
- EmailJS: A service that allows sending emails directly from JavaScript, with no backend needed.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

````js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
````

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
