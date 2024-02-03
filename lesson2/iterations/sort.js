

const ages = [9, 52, 14, 6, 24, 43]

const risingAges = ages.sort((a, b) => {
    return a - b
})

console.log(risingAges)

const fallingAges = ages.sort((a, b) => {
    return b - a
})

console.log(fallingAges)

/*

Den tar två siffror i taget och skickar in som parameter

Om vi returnerar positiv siffra, så kommer b sorteras före a.




*/
