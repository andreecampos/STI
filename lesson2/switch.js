/*
Switch är ett enkelt sätt att hantera olika fall i Javascript beroende på ett värde.

Man anger ett värde i parantesen, och den jämför (===) det värdet med värdet som du
anger i olika cases. Det case som har lika värde som ditt värde i parantesen, kommer
att köras. Om inget case matchar, så körs istället default.

Tänk på att det görs en === jämförelse mellan värdet i parantesen och värdet i case.

Switch funkar på så sätt, att den tar din variabel och gör en === jämförelse
med ditt värde i varje case.
*/

const day = 'Monday'

switch (day) {
    case 'Monday':
        console.log("Fredaaag, ut och festa!!")
        break
    case 'Saturday':
        console.log('Lördag, ta det lugnt hemma')
        break
    case 'Sunday':
        console.log('Söndag, förbereda för skolan imorgon')
        break
    default:
        console.log("Mitt i veckan")
        break
}

// Exemplet ovan kan skrivas med en if sats som då ser ut såhär

if (day === 'Monday') {
    console.log("Fredaaag, ut och festa!!")
} else if (day === 'Saturday') {
    console.log('Lördag, ta det lugnt hemma')
} else if (day === 'Sunday') {
    console.log('Söndag, förbereda för skolan imorgon')
} else {
    console.log("Mitt i veckan")
}


/*

Låt oss ta ett annat exempel. Anta att vi har en konstant variabel
som heter grade, som har är en number med siffran 60. 

Vi vill att om grade är över 50, så ska vi printa ut Godkänt, annars vill vi
printa ut Inte godkänt.

Frågan är om det här kommer att fungera?

*/

const grade = 60

switch (grade) {
    case grade > 50:
        console.log("Godkänt!")
        break
    default:
        console.log("Inte godkänt!")
        break
}

if (grade === (grade > 50)) {
    console.log("Godkänt!")
} else {
    console.log("Inte godkänt!")
}







// Detta kommer fungera!
switch (true) {
    case grade > 50:
        console.log("Godkänt!")
        break
    default:
        console.log("Inte godkänt!")
        break
}

if (true === (grade > 50)) {
    console.log("Godkänt!")
} else {
    console.log("Inte godkänt!")
}
