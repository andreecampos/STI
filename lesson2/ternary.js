
/* --- Ternary Operator --- */

const age = 18

let message

if (age >= 18 && age < 25) {
    message = "Välkommen in!"
} else {
    message = "Du måste vara över 18 år för att komma in"
}

console.log(message)

// ------------------------------------------------- //

// ett annat sätt att skriva med Ternary Operator
// const variabelNamn = (boolean expression) ? OmSant : OmFalskt
// värdet av variabelNamn bestäms ifall boolean expression är true eller false

const message2 = age >= 18 && age < 25 ? "Välkommen in!" : "Du måste 18"

console.log(message2)





