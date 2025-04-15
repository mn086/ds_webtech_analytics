/**
 * Beispiele für dictionary-ähnliche Datentypen in JavaScript
 * 
 * 1. Object: Der klassische JavaScript-Datentyp für Schlüssel-Wert-Paare
 * 2. Map: Ein modernerer Datentyp mit zusätzlichen Funktionen
 */

// Beispiel mit Object (ähnlich Python Dictionary)
const person = {
    name: 'Max',
    age: 30,
    city: 'Berlin',
    hobbies: ['Lesen', 'Programmieren', 'Wandern']
};

// Zugriff auf Werte
console.log(person.name);        // "Max"
console.log(person['age']);      // 30

// Werte ändern
person.age = 31;
person['city'] = 'Hamburg';

// Neues Schlüssel-Wert-Paar hinzufügen
person.job = 'Entwickler';

// Schlüssel-Wert-Paar löschen
delete person.hobbies;

// Beispiel mit Map
const personMap = new Map([
    ['name', 'Anna'],
    ['age', 25],
    ['city', 'München']
]);

// Zugriff auf Werte
console.log(personMap.get('name'));  // "Anna"

// Werte ändern
personMap.set('age', 26);

// Neues Schlüssel-Wert-Paar hinzufügen
personMap.set('job', 'Designerin');

// Schlüssel-Wert-Paar löschen
personMap.delete('city');

// Über Map iterieren
personMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Hauptunterschiede zwischen Object und Map:
// 1. Map kann beliebige Datentypen als Schlüssel verwenden (Object nur Strings oder Symbole)
// 2. Map behält die Einfügereihenfolge bei
// 3. Map hat eingebaute Methoden wie size, clear(), etc.
// 4. Object ist besser für statische Datenstrukturen geeignet 