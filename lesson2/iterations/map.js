let persons = [
    {
        name: "Ahmad",
        age: 28
    },
    {
        name: "Andree",
        age: 25
    },
    {
        name: "Francisco",
        age: 34
    }
]


let personsParagraph = persons.map((person) => {
    return `<p>${person.name} - ${person.age}</p>`
})

personsParagraph = personsParagraph.join('')

const totalDiv = `<div>${personsParagraph}</div>`

console.log(totalDiv)



/*

Map tar en array med element i, och kallar våran anonyma funktion en gång i taget för varje element.

Vi returnerar en ny element för varje element som fanns i den ursprungliga arrayen.

*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]