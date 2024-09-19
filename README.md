> **Note:** Some commits in this project were made using the username `alexdev30`, which is my secondary account. I forgot to switch to my primary account during development, but I can verify that `alexdev30` belongs to me. Please reach out if you need further clarification.

# Opn React Test Assignment🦄

![Build and Test](https://github.com/datawowio/nextjs-template/actions/workflows/build_and_test.yml/badge.svg)

Welcome to the Opn React Test repository! 🚀 This project is a showcase of my skills and creativity in building modern web applications with React. It’s designed to meet the challenge set by Opn, demonstrating not only my technical prowess but also my passion for crafting clean, efficient, and user-friendly interfaces.

## Available Commands 🤖

This project comes with a set of predefined commands that streamline common development tasks. Each command is crafted to help you efficiently manage and build your React application. Here’s what you can do with them:

| Command                | Description                                                     |
|------------------------|-----------------------------------------------------------------|
| `yarn server`           | Starts a JSON server with db.json on port 3001 for mock data.                          |
| `yarn client` | Runs the application in development mode using Webpack.                            |
| `yarn test`          | Runs the test suite with Jest. |

In case you are having problem running `yarn client`, try to run this command on terminal `export NODE_OPTIONS=--openssl-legacy-provider`. This will tells Node.js to use the legacy OpenSSL provider, which is related to cryptographic functionality. If you're using Node.js v17 or newer and encounter issues related to OpenSSL, this command can help keep your project running without having to immediately upgrade or modify cryptographic dependencies.

## Key Features 🌟

This template comes with a comprehensive setup out of the box, including:

- **[Styled Components][1]**: Embrace the power of CSS-in-JS with styled-components for scalable and maintainable styling.
- **[Redux for State Management][2]**: Learn how to manage complex state with Redux, including dynamic updates and middleware handling.
- **[Jest Testing][3]**: A testing framework setup with Jest to ensure your application functions as expected.
- **Mock API Integration**: Simulate backend interactions with a local JSON server, perfect for frontend development and testing.

[1]: https://styled-components.com/docs/api
[2]: https://react-redux.js.org/
[3]: https://jestjs.io/

