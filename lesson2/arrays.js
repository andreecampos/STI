const fruits = ['apple', 'orange', 'banana']

const lastFruit = fruits.pop() // Tar bort sista elementen, och returnerar den

//console.log(lastFruit) // banana
//console.log(fruits) // ['apple', 'orange']

fruits.push('tomato') // Lägger in ett nytt element i slutet av arrayen

//console.log(fruits) // ['apple', 'orange', 'tomato']

fruits[0] // Fruits vid index 0

fruits.at(0) // Fruits vid index 0

const vegetables = ['cucumber', 'onion', ...fruits]

console.log(vegetables) // [ 'cucumber', 'onion', 'apple', 'orange', 'tomato' ]


// Man kan även använda spread operator på ett objekt

const obj = {
    name: "AHmad",
    age: 25
}

const test = {
    url: "hej",
    age: 100,
    ...obj
}

