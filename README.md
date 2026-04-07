# vis-literacy

This repository contains two onboarding prototypes for data visualization literacy:

- `data-visualization-chatbot`: source code for the chatbot-based onboarding prototype
- `data-visualization-scrollytelling`: source code for the scrollytelling-based onboarding prototype

## Requirements

- Node.js 18.x and npm for the chatbot application
- Python 3 for serving the scrollytelling pages locally

## Install the Chatbot Application

1. Install Node.js 18.x for your operating system.
2. Open a terminal and move into the chatbot project:

   ```bash
   cd data-visualization-chatbot
   ```

3. Install all required modules:

   ```bash
   npm install
   ```

This command installs the packages declared in `data-visualization-chatbot/package.json`, including:

- `express`
- `cors`
- `react`
- `react-dom`
- `react-scripts`
- `react-simple-chatbot`
- `d3`
- `react-markdown`
- `recharts`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `web-vitals`

`gh-pages` is also installed as a development dependency for deployment builds.

## Run the Chatbot Application

Start the backend server in one terminal:

```bash
cd data-visualization-chatbot
node src/backend.js
```

Start the frontend in a second terminal:

```bash
cd data-visualization-chatbot
npm start
```

The frontend runs on `http://localhost:3000`, and the backend listens on port `3001`.

## Run the Scrollytelling Prototype

No additional npm modules are required for the scrollytelling prototype.

1. Open a terminal and move into the scrollytelling directory:

   ```bash
   cd data-visualization-scrollytelling
   ```

2. Start a local server:

   ```bash
   python3 -m http.server 8000
   ```

3. Open the heatmap onboarding page:

   ```text
   http://localhost:8000/Heatmap-Scrolly/
   ```

4. Open the treemap onboarding page:

   ```text
   http://localhost:8000/Treemap-Scrolly/
   ```
