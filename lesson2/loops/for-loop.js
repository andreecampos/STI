// Det finns 3 typer av loops i JS
/* --- For-loop --- */
const ages = [10, 20, 30, 40]; // length 4
for (let andree = 0; andree <= ages.length; andree++) {
  console.log(ages[andree]); // Loggar 10 till konsolen
}

// Exempelvis kan vi använda for-loop för att connecta till en databas flera gånger

/*
const url = "mongodb:///asdsad"

let connected = false

for (let i = 0; i <= 3; i++) {

    try {
        mongodb.connect
        connected = true
        break
    } catch (error) {
        console.log("Failed to connect, attempting again!")
    }

}

if (!connected) throw "Failed to connect to Mongodb after 3 attempts"
*/
