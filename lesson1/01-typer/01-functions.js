function myToys(a){

    let leksaker = {
        bilar:["röd bil", "blå bil"],
        dockor: ["stor docka", "liten docka"],
        vertyg:["hammare", "skruvmejsel"]
    }

    console.log(leksaker)
}
myToys()

let leksaker = {
    bilar:["röd bil", "blå bil"],
    dockor: ["stor docka", "liten docka"],
    vertyg:["hammare", "skruvmejsel"],
    telefon:10
}

const addera = (a, b) => {
  return a + b }

console.log(addera(leksaker.dockor.at(1), leksaker.vertyg.at(0)))
console.log(addera(leksaker.telefon, 20))



