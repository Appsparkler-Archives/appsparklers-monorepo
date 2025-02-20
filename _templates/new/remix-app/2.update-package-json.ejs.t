---
to: "apps/<%= shortName %>-app/package.json" 
---

{
  "name": "@repo/apps-<%= shortName %>-app",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "_dev": "remix vite:dev",
    "dev": "rimraf build .netlify/edge-functions && netlify dev",
    "build": "npm run css && remix vite:build",
    "css": "tailwindcss -i ./app/input.css -o ./app/output.css",
    "css:watch": "tailwindcss -i ./app/input.css -o ./app/output.css --watch",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "start": "netlify serve",
    "typecheck": "tsc",
    "netlify:build": "netlify build",
    "deploy": "netlify deploy --open",
    "deploy:prod": "netlify deploy --prod --open"
  },
  "dependencies": {
    "@netlify/edge-functions": "^2.3.1",
    "@netlify/remix-edge-adapter": "^3.2.1",
    "@netlify/remix-runtime": "^2.2.0",
    "@remix-run/node": "^2.15.2",
    "@remix-run/react": "^2.15.2",
    "@remix-run/serve": "^2.15.2",
    "isbot": "^4.1.0"
  },
  "devDependencies": {
    "@remix-run/dev": "^2.15.2",
    "@tailwindcss/typography": "^0.5.15",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@typescript-eslint/eslint-plugin": "^6.7.4",
    "daisyui": "^4.12.23",
    "eslint": "^8.38.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "rimraf": "^6.0.1",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.1.6",
    "vite": "^5.4.11",
    "vite-tsconfig-paths": "^4.2.1"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
