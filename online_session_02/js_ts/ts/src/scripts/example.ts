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
let userName: string = "Max";
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ["Lesen", "Programmieren", "Wandern"];

// Interface für ein Person-Objekt
interface Person {
    name: string;
    age: number;
    hobbies?: string[]; // Optionales Feld
}

// Klasse mit TypeScript
class User implements Person {
    constructor(
        public name: string,
        public age: number,
        public hobbies?: string[]
    ) {}

    // Methode mit Typisierung
    greet(): string {
        return `Hallo, ich bin ${this.name} und ${this.age} Jahre alt.`;
    }
}

// Funktion mit Typisierung
function createUser(name: string, age: number): User {
    return new User(name, age);
}

// Generische Funktion
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

// Verwendung der Beispiele
const user = createUser("Anna", 25);
console.log(user.greet());

// Verwendung der generischen Funktion
const firstHobby = getFirstElement(hobbies);
console.log(`Erstes Hobby: ${firstHobby}`);

// Union Types
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

// Type Assertion
let someValue: any = "Dies ist ein String";
let strLength: number = (someValue as string).length;

// Enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favoriteColor: Color = Color.Blue;
console.log(`Lieblingsfarbe: ${favoriteColor}`); 