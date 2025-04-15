/**
 * Beispiele für die Verwendung von Funktionen in Template Literals
 * 
 * Funktionen können auf verschiedene Arten in Template Literals verwendet werden:
 * 1. Direkter Funktionsaufruf
 * 2. Methoden von Objekten
 * 3. Selbstdefinierte Funktionen
 * 4. Arrow Functions
 * 5. Template Literals in Funktionen
 */

// Einfache Funktion
function begrüßen(name) {
    return `Hallo ${name}!`;
}

// Arrow Function
const verabschieden = (name) => `Auf Wiedersehen ${name}!`;

// Objekt mit Methoden
const person = {
    name: "Max",
    alter: 30,
    getInfo() {
        return `${this.name} ist ${this.alter} Jahre alt`;
    },
    getAdresse() {
        return {
            stadt: "Berlin",
            land: "Deutschland",
            toString() {
                return `${this.stadt}, ${this.land}`;
            }
        };
    }
};

// Beispiele für Funktionsaufrufe in Template Literals
console.log(`Begrüßung: ${begrüßen("Anna")}`);                    // Hallo Anna!
console.log(`Verabschiedung: ${verabschieden("Peter")}`);         // Auf Wiedersehen Peter!
console.log(`Personeninfo: ${person.getInfo()}`);                 // Max ist 30 Jahre alt
console.log(`Adresse: ${person.getAdresse().toString()}`);        // Berlin, Deutschland

// Funktionen mit Parametern
function formatieren(text, ...args) {
    return text.toUpperCase() + " " + args.join(", ");
}

console.log(`Formatiert: ${formatieren("wichtig", "dringend", "sofort")}`);  // WICHTIG dringend, sofort

// Arrow Function direkt im Template Literal
console.log(`Berechnung: ${((a, b) => a + b)(5, 3)}`);            // 8

// Verschachtelte Template Literals mit Funktionen
console.log(`Ergebnis: ${`${begrüßen("Max")} ${verabschieden("Anna")}`}`);  // Hallo Max! Auf Wiedersehen Anna!

// Funktionen mit bedingten Ausdrücken
function istVolljährig(alter) {
    return alter >= 18 ? "volljährig" : "minderjährig";
}

console.log(`Status: ${istVolljährig(20)}`);                      // volljährig
console.log(`Status: ${istVolljährig(16)}`);                      // minderjährig 