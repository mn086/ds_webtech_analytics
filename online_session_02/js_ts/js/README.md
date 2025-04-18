# JavaScript Beispiele

## Einfache JavaScript-Umgebung mit Node.JS

Installation von [Node.js](https://nodejs.org/)
In einem beliebigen Projektordner:

```shell
# Anlegen einer angemessenen .gitignore Datei
npx gitignore node

# Initialisierung des Node-Projekts
npm init -y
```

## Optional: Einsatz von Lint (-> ESLint) 

```shell
# Installation
# Parameter --save-dev
#   nur für Entwicklung,
#   nicht im Produktivbuild!
npm install eslint --save-dev

# For React projects
npm install --save-dev eslint-config-airbnb eslint-plugin-react

# For TypeScript projects
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Erstelle eine neue Datei <code>eslint.config.js</code>:

```js
import eslint from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/'
        ]
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            },
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'warn',
            'no-unused-vars': 'warn'
        }
    }
];
```
Ergänze die Datei package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
```
Aufruf von eslint:
```bash
npm lint
# oder
npm lint:fix 
```

## Beispiele
A JavaScript project focused on working with objects and data structures.



## Quellen
- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Ausführliche Einführung zu JavaScript

- [Debugging JS in Chrome](https://developer.chrome.com/docs/devtools/javascript)
