# Node.js Projekt Initialisierung aus Git

## Schritte zur Initialisierung

1. **Repository klonen**:
```bash
git clone <repository-url>
cd <projekt-verzeichnis>
```

2. **package.json überprüfen**:
- Stelle sicher, dass eine `package.json` Datei existiert
- Falls nicht vorhanden, erstelle sie mit:
```bash
npm init -y
```

3. **Abhängigkeiten installieren**:
```bash
npm install
```
Dies installiert alle in der `package.json` definierten Abhängigkeiten.

4. **Entwicklungsabhängigkeiten installieren** (falls vorhanden):
```bash
npm install --only=dev
```

5. **Projekt starten**:
```bash
npm start
```
oder den entsprechenden Startbefehl aus der `package.json`

## Wichtige Punkte
- `node_modules` wird nicht in Git versioniert, da es zu groß ist
- Die `package.json` enthält alle notwendigen Informationen über die Abhängigkeiten
- `package-lock.json` oder `yarn.lock` stellen sicher, dass die exakten Versionen installiert werden
- Bei Problemen kann `npm cache clean --force` helfen

## Troubleshooting
- Falls `npm install` fehlschlägt:
  ```bash
  npm cache clean --force
  rm -rf node_modules
  rm package-lock.json
  npm install
  ```
- Bei Versionskonflikten:
  ```bash
  npm install --legacy-peer-deps
  ```