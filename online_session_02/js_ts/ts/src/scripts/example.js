/**
 * Einfaches TypeScript Beispiel
 *
 * Dieses Beispiel zeigt grundlegende TypeScript-Konzepte:
 * - Typen
 * - Interfaces
 * - Klassen
 * - Funktionen
 * - Generics
 */
// Grundlegende Typen
var userName = "Max";
var age = 30;
var isActive = true;
var hobbies = ["Lesen", "Programmieren", "Wandern"];
// Klasse mit TypeScript
var User = /** @class */ (function () {
    function User(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Methode mit Typisierung
    User.prototype.greet = function () {
        return "Hallo, ich bin ".concat(this.name, " und ").concat(this.age, " Jahre alt.");
    };
    return User;
}());
// Funktion mit Typisierung
function createUser(name, age) {
    return new User(name, age);
}
// Generische Funktion
function getFirstElement(array) {
    return array[0];
}
// Verwendung der Beispiele
var user = createUser("Anna", 25);
console.log(user.greet());
// Verwendung der generischen Funktion
var firstHobby = getFirstElement(hobbies);
console.log("Erstes Hobby: ".concat(firstHobby));
var userStatus = "active";
// Type Assertion
var someValue = "Dies ist ein String";
var strLength = someValue.length;
// Enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var favoriteColor = Color.Blue;
console.log("Lieblingsfarbe: ".concat(favoriteColor));
