# Express.js Installation

## Grundlegende Installation

1. **Projekt initialisieren** (falls noch nicht geschehen):
```bash
npm init -y
```
- Zur Verwendung von ES Modules (import/export) füge
```json
{
  "type": "module"
}
```
im File ``package.json`` hinzu.


2. **Express installieren**:
```bash
npm install express
```

3. **Grundlegende Express-Anwendung erstellen**:
Erstellen Sie eine Datei `app.ts` oder `app.js`:

```js
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'))
app.listen(port, () => console.log(`Server listening on port: ${port}`));
```

4. **Starten der Anwendung**:

```bash
node app.js
```

5. **Optional: Scripts in package.json hinzufügen**:
```json
{
  "scripts": {
    "start": "node app.js",
  }
}
```

## Wichtige Punkte
- Express ist ein Web-Framework für Node.js
- Es unterstützt Middleware, Routing und Template Engines

