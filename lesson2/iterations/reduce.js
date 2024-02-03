

/*

Med reduce har vi ett startvärde som vi anger. Det kan vara en siffra,
eller ett objekt. Vad som helst. Sedan så itererar vi igenom en array,
och för varje element i arrayen så utför vi någon logik så vi ackumulerar
resultatet i vårat startvärde. Som resultat får vi det ackumulerade värdet.

*/


// Exempel 1. Summan av alla siffror i en array
// Vi har en lista av nummer. I våran reduce anger vi ett startvärde, som här är siffran 0. För varje element så skickar vi in
// det ackumulerade värdet som börjar på 0, samt elementet i arrayen. Sedan plussar vi ihop ackumulerade + elementet, och returnerar det.
// När vi returnerar i en reduce, så ersätter vi startvärdet.

// Resultatet blir den totala summan av alla siffror.

const numbers = [1, 2, 3, 4, 5, 6]

const result = numbers.reduce((acc, currentElement) => {
   return acc + currentElement
}, 0)

console.log(result)

// Exempel 2. Vi har en shopping cart där användaren har valt en lista av produkter.
// Vi vill visa upp totalsumman för användaren.

const shoppingCart = [
    {
        name: "T-Shirt",
        price: 249,
        quantity: 1
    },
    {
        name: "Keps",
        price: 199,
        quantity: 1
    },
    {
        name: "Strumpor",
        price: 39,
        quantity: 5
    }
]

// Vi börjar på siffran 0, och för varje produkt så gångrar vi produktens pris med produktens kvantitet, och plussar det på det ackumulerade värdet.
// Resultatet blir totalpriset för alla produkter.


const totalAmount = shoppingCart.reduce((acc, product) => {
    return acc + (product.price * product.quantity)
}, 0)

console.log(totalAmount)
