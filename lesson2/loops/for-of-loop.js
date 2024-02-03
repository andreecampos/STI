// För varje element i arrayen, så itererar vi och gör något med elementet.

// let messages = [
//     {
//         number: "+467078071239",
//         message: "Hej där!"
//     },
//     {
//         number: "+46707807532",
//         message: "Hej därasdsa!"
//     },
//     {
//         number: "+46707853242",
//         message: "Hej dasdasär!"
//     }
// ]

// for (let message of messages) {
//     sendSMS(message)
// }


// function sendSMS(message) {
//     console.log("SMS sent to ", message.number)
// }


const registrations = [
{
    username: "andree123",
    password: "Hej123"
},
{
    username: "ahmad",
    password: "Hej123"
},
{
    username: "francisco.padilla",
    password: "Hej123"
},
]

for (const user of registrations) {
    createUser(user)
}


function createUser(user) {
    axios.post("/create-account", {

    })
}





