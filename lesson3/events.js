//------- nos traemos el button
// addEventListener

let button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("This is ALERT");
});

// Nu börjar vi skapa en lista med objekt på ett
// dynamiskt sätt med hjälp av JavaScript.

let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    //Metoden trim() på en strängen tar bort inledande och avslutande Tomma platser.
    //  Detta är användbart för att säkerställa att användaren inte har angett bara
    //  Tomma platser.
    //  !== Om den resulterande strängen inte är lika med en tom sträng betyder det att
    //  användaren har angett något annat än bara tomma platser.
    let newItem = document.createElement("li");
    newItem.innerText = input.value;
    // Lägger till ett HTML-element som barn till <body>-elementet.
    // Det används för att dynamiskt lägga till innehåll till sidan
    list.appendChild(newItem);
    // input.value = "";
  }
});


const filterInput = document.getElementById("filterInput");
const itemList = document.querySelector(".list");


filterInput.addEventListener("keyup", () => {
    const term = filterInput.value.toLowerCase();
    // betyder det att vi omvandlar alla stora bokstäver i en sträng till  
    // motsvarande små bokstäver,för att göra sökningen enklare.
  const items = itemList.getElementsByTagName("li");
  //Hämtar alla listelement (li) från det överordnade elementet med klassen "list" 
// console.log("items here:",items)
  Array.from(items).forEach((item) => {

// console.log("new items here:",Array.from(items))

/* 
Konverterar NodeList till en array med Array.from(items).
Använder en forEach-loop för att iterera över varje listelement.
*/
    if (item.textContent.toLowerCase().indexOf(term) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
/*
Jämför innehållet av varje listelement med den filtrerade inmatningen.
Om det finns en matchning, ändrar den CSS-egenskapen display till "block" för att visa elementet.
Annars ändras display till "none" för att dölja elementet.
*/

/*
När vi använder .indexOf(term), om den hittar ordet i strängen, 
returnerar den startpositionen för det ordet i strängen. Positionen mäts 
i index och börjar från 0 för det första tecknet.
Nu, angående varför den returnerar -1 när den inte hittar ordet, det är
 helt enkelt en konvention i JavaScript. Om ingen matchning hittas, returnerar 
 .indexOf() -1 för att indikera att ordet inte finns i strängen.

*/
  });
});



