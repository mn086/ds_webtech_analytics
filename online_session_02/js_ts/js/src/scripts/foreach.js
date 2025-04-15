/**
 * Demonstriert verschiedene Möglichkeiten, die Array.forEach() Methode zu verwenden
 * 
 * Die forEach() Methode führt eine bereitgestellte Funktion einmal für jedes Array-Element aus.
 * 
 * Es gibt mehrere Möglichkeiten, forEach zu implementieren:
 * 1. Verwendung einer benannten Callback-Funktion
 * 2. Verwendung einer anonymen Funktion
 * 3. Verwendung einer Pfeilfunktion (Arrow Function)
 * 4. Verwendung einer Funktion mit allen Parametern (element, index, array)
 * 
 * @example
 * // Grundlegende Verwendung mit benannter Callback-Funktion
 * const callback = function(element) { console.log(element); };
 * array.forEach(callback);
 * 
 * // Verwendung einer anonymen Funktion
 * array.forEach(function(element) { console.log(element); });
 * 
 * // Verwendung einer Pfeilfunktion
 * array.forEach((element) => { console.log(element); });
 * 
 * // Verwendung aller Parameter
 * array.forEach(function(element, index, array) { 
 *   console.log(element, index, array); 
 * });
 */

const a = ['a', 'b', 'c'];

const callback = function (element) {
    console.log(element);
};
a.forEach(callback);

a.forEach(function (element) {
    console.log(element);
});

a.forEach((element) => {
    console.log(element);
});

a.forEach(function (element, index, array) {
    console.log(element, index, array);
});

a.forEach((element, index, array) => {
    console.log(element, index, array);
});



