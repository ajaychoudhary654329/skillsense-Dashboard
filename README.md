# Skillsense Dashboard

Skillsense Dashboard is a React single-page application prototype for viewing operator and station information. It includes a dashboard shell, employee status views, employee detail panels, sample deployment history, and a Redux-backed employee cart.

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm, included with Node.js

### Install and run

From the `skillsense-Dashboard` directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The development server supports hot module replacement.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally; run after `npm run build`. |
| `npm run lint` | Run ESLint across the project. |
| `npm run deploy` | Publish `dist/` with `gh-pages`; requires deployment configuration and repository access. |

## Application Routes

The shared header is rendered on each registered route.

| Path | Current page |
| --- | --- |
| `/` | Main dashboard with filters and Skillsense tabs. |
| `/about` | Placeholder page. |
| `/dashboard` | Placeholder page. |
| `/mock-tests` | Placeholder page. |
| `/report` | Placeholder page. |
| `/cart` | Lists employees added to the cart and allows removal. |

`src/components/Router/Filter.jsx` exists but is not currently registered as a route.

## Current Functionality and Data

- The main dashboard combines filter controls with the Skillsense tab area.
- The Operators view switches between hard-coded active and inactive employee records. Employee details are shown alongside the list.
- Deployment history is rendered from sample records in `src/components/body/components/common/data1.js`.
- Employees can be added to and removed from the cart. Redux Toolkit stores cart state in application memory; it is not retained after a page reload.
- Search and several tabs/pages are interface scaffolding. The employee search field does not currently filter the list, and several content panels display placeholder text.

This repository contains a frontend only. There is no API client, backend service, authentication flow, database, or automated test script configured. Dashboard and employee records are local sample data, not live organizational data.

## Technical Overview

- **UI:** React 19 with JSX and CSS stylesheets.
- **Build and development:** Vite 7 with the React plugin; `index.html` loads `src/main.jsx`.
- **Navigation:** React Router routes are declared in `src/App.jsx` with `BrowserRouter`, `Routes`, and `Route`.
- **Component library:** Material UI and its icons; Emotion provides MUI styling support.
- **State management:** Redux Toolkit defines the cart slice and store. `react-redux` provides the store to the application, while React hooks manage local UI state.
- **Code quality:** ESLint 9 is configured in `eslint.config.js`.
- **Language:** JavaScript and JSX; TypeScript is not configured.
- **Deployment:** A `gh-pages` script is provided. For a GitHub Pages project site, set Vite's `base` in `vite.config.js` to the repository path before building and deploying; it is currently commented out.

## Project Structure

```text
skillsense-Dashboard/
├── public/
│   └── vite.svg                     # Public static asset
├── src/
│   ├── assets/                      # Brand and UI images: Marutilogo, IoTLogo, HumanLogo, person, home, search, menu, arrows, and status icons
│   ├── components/
│   │   ├── Router/                  # About.jsx, Cart.jsx/.css, Dashboard.jsx, Filter.jsx, Mocktests.jsx, Reports.jsx
│   │   ├── body/                    # body.jsx/.css and dashboard composition
│   │   │   ├── components/
│   │   │   │   ├── common/          # data1.js, SelectBox.jsx/.css, selectBox.jsx/.css, TimelineTable.jsx/.css
│   │   │   │   └── filters/         # filters.jsx/.css
│   │   │   ├── skillsense/          # skillsense.jsx/.css
│   │   │   └── TableContent/
│   │   │       ├── Deployment/      # Deployment.jsx/.css
│   │   │       ├── EmployeeBar/     # employeeBar.jsx/.css
│   │   │       ├── EmployeeDetails/ # employeeDetails.jsx/.css
│   │   │       └── viewTab/         # view.jsx/.css
│   │   └── header/                  # header.jsx/.css
│   ├── redux/
│   │   ├── cartSlice.js             # Cart actions and reducer
│   │   └── store.js                 # Redux store configuration
│   ├── styles/
│   │   └── colors.css               # Shared color variables
│   ├── App.jsx                      # Shared layout and route definitions
│   ├── App.css                      # App-level styles
│   ├── index.css                    # Global styles
│   └── main.jsx                     # React entry point and Redux Provider
├── .gitignore
├── eslint.config.js
├── index.html                       # Vite HTML entry document
├── package.json                     # Scripts and dependency manifest
├── package-lock.json                # Locked npm dependency versions
└── vite.config.js                   # Vite and React plugin configuration
```

### Main UI Flow

`main.jsx` mounts the application and wraps it in the Redux `Provider`. `App.jsx` provides the router and shared header. The `/` route renders `body.jsx`, which combines the dashboard filters and Skillsense tabs. The default Area Dashboard tab renders the table/view components, which then render the operator list and employee detail panel. Cart actions dispatch Redux slice actions, and the header reads the cart count from the store.

## Development Notes

- Keep reusable UI in the corresponding `src/components/` area and shared palette values in `src/styles/colors.css`.
- Add route definitions in `src/App.jsx` when connecting a new route-level page.
- Replace hard-coded employee and deployment data with an API integration when a backend is available.
- Run `npm run lint` and `npm run build` before sharing or deploying changes.
