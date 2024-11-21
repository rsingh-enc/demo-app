# Demo App

### Overview

This repository contains a React application with a Repository List page and a Repository Detail page. The pages are integrated with the GitHub Repos API, and the isolated components are also covered by unit test cases.

### Tech Stacks

-   **TypeScript**: Used to write components in TypeScript.
-   **React.js**: Used to create reusable components with this library.
-   **React Router v6**: Used to build a multi-page application alongside React.js.
-   **Sass**: Used to create preprocessed CSS.
-   **Axios**: Used to make API calls, similar to `fetch`.
-   **Vite**: Used to compile the React.js application and optimize the chunks.
-   **React Testing Library**: Used to write unit tests for React components.

### Folder and File Descriptions

-   **public**: Contains static files like images, font files, etc.
-   **.gitignore**: Specifies files and directories to be ignored by Git.
-   **package.json**: Lists the project dependencies and scripts.
-   **src/**: Contains pages, components, services, etc.
    -   **components**: Contains reusable components like RepoList, Detail, Element, etc.
    -   **pages**: Contains application pages like Home, Detail, etc.
    -   **types**: Contains the defined types for components, services, etc.
    -   **services**: Contains all services of the application that call APIs from the client side.
    -   **styles**: Contains all styles in SCSS format.
    -   **App.tsx**: Contains all routes of the application.
    -   **main.tsx**: The bootstrap file of the application.
-   **index.html**: Preview of the application.
-   **tests/**: Contains the unit tests for the components.
    -   **mockData.ts**: Contains the mock data for tests.
    -   **components/.ts**: Contains the component tests.
-   **.env.example**: Contains example environment variables.
-   **eslint.config.js**: ESLint configuration.
-   **.prettierrc**: Configuration for Prettier.
-   **tsconfig.json**: TypeScript configuration.
    -   **tsconfig.app.json**
    -   **tsconfig.node.json**
-   **vite.config.ts**: Vite configuration.
-   **README.md**: Contains documentation for the app codebase.

### Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd doat-player-server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory and add following variable, or make a copy of `.env.example` and modify the variable values as needed.

    ```
    VITE_API_URL=api_url
    VITE_BASE_PATH=/demo-app/
    ```

4. **Start the Application:**

    ```bash
    npm run dev
    ```

5. **Generate the Prodcution Build:**
    ```bash
    npm run build
    ```
6. **Run the Prodcution Build:**
    ```bash
    npm run preview
    ```
7. **App URL:** https://rsingh-enc.github.io/demo-app/
