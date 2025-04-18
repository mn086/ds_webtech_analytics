const a = `header ${ true ? "wahr" : "falsch"}`
console.log(a);

function formatieren(...args) {
    return args.join(", ");
}

const b = `${formatieren("Hallo", "Welt", "!") }`

console.log(b);

