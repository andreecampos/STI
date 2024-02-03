
/* Block-scopade funktioner */

//addera(5, 10) // Vi får fel, eftersom vi kallar på addera innan den är tillgänglig.

// 1 -Block-scoped funktion
const addera = (a, b) => {
    return a + b
}
addera(5, 10) 
console.log(addera(5, 10) )

/* 2 -Globala funktioner */

// addera(5, 10) // Det funkar eftersom addera nedan är global

// // Global funktion, som var i variabler.
// function addera(a, b) {
//     return a + b
// }

