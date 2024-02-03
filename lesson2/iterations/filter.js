const ages = [9, 6, 14, 24, 52, 43]

// För varje element i ages, skickas den in som parameter
// till våran anonyma funktion. Våran funktion returnerar antingen true eller false.
// Om vi returnerar true, så kommer elementet att inkluderas i våran nya array
// Om vi returnerar false, så kommer elementet inte inkluderas i våran nya array

const adultAges = ages.filter((age) => {
    return age >= 18
})

// Samma sak som ovan, olika kodstil
const adultAges2 = ages.filter(age => age >= 18)

/* ------------------------------------------------------------------------ */


const users = [
{
  username: "andree123",
  isOnline: true
},
{
  username: "ahmad32",
  isOnline: false
},
{
  username: "francisco.padilla",
  isOnline: true
},
]

const onlineUsers = users.filter((user) => {
    return user.isOnline
})

