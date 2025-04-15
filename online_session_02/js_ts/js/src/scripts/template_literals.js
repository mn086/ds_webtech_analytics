/**
 * Beispiele für Operatoren in Template Literals
 * 
 * Template Literals (Template Strings) unterstützen verschiedene Operatoren:
 * - Arithmetische Operatoren (+, -, *, /, %, **)
 * - Vergleichsoperatoren (==, ===, !=, !==, >, <, >=, <=)
 * - Logische Operatoren (&&, ||, !)
 * - Bedingungsoperator (?:)
 * - Nullish Coalescing (??)
 * - Optional Chaining (?.)
 */

const a = 10;
const b = 5;
const name = "Max";
const age = 30;
const city = "Berlin";
const person = {
    name: "Anna",
    address: {
        city: "München"
    }
};

// Arithmetische Operatoren
console.log(`Summe: ${a + b}`);              // 15
console.log(`Differenz: ${a - b}`);          // 5
console.log(`Produkt: ${a * b}`);            // 50
console.log(`Quotient: ${a / b}`);           // 2
console.log(`Modulo: ${a % b}`);             // 0
console.log(`Potenz: ${a ** b}`);            // 100000

// Vergleichsoperatoren
console.log(`Ist gleich: ${a === b}`);       // false
console.log(`Ist ungleich: ${a !== b}`);     // true
console.log(`Größer als: ${a > b}`);         // true
console.log(`Kleiner als: ${a < b}`);        // false

// Logische Operatoren
console.log(`UND: ${a > 0 && b > 0}`);       // true
console.log(`ODER: ${a > 0 || b < 0}`);      // true
console.log(`NICHT: ${!false}`);             // true

// Bedingungsoperator (ternärer Operator)
console.log(`Ist volljährig: ${age >= 18 ? 'Ja' : 'Nein'}`);  // Ja

// Nullish Coalescing
const username = null;
console.log(`Benutzername: ${username ?? 'Gast'}`);  // Gast

// Optional Chaining
console.log(`Stadt: ${person?.address?.city}`);      // München
console.log(`Land: ${person?.address?.country}`);    // undefined

// Kombinierte Operatoren
console.log(`Ergebnis: ${(a + b) * 2 > 20 ? 'Groß' : 'Klein'}`);  // Groß

// Template Literals in Template Literals
console.log(`Hallo ${`${name} aus ${city}`}!`);  // Hallo Max aus Berlin! 