# Installation von Next.js

## Automatische Installation

```bash
npx create-next-app@latest
```
## Manuelle Installation

```bash
npm install react@latest react-dom@latest next@latest
```

## Start des Dev-Servers

Füge ein ggf. ein "next dev" Script zur Datei package.json 
```json
{
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```
Starte den Development-Server mit 
```bash
npm run dev
```



