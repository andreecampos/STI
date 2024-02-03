// console.log("js connected")
// document.getElementById: Hämtar ett HTML-element baserat på dess ID

let title = document.getElementById('title')
console.log(title)


// document.querySelector: Hämtar det första HTML-elementet som matchar en specificerad CSS-selektor
let mainDiv = document.querySelector('.main-div')
console.log(mainDiv)


// document.querySelectorAll;Hämtar alla HTML-element som matchar en specificerad CSS-selekto
// Exempel: document.querySelectorAll('p') hämtar alla <p>-element på sidan.
let listIems = document.querySelectorAll('ul.list > li')
console.log(listIems)

//------------------Nu ska vi ändra elementen.--------------

title.innerText = 'This is a new title with innerText'
title.innerHTML = '<em>this is innerhtml</em>'

//---------- Nu kommer vi att ändra attribut och klasser -----------

let image = document.querySelector('img');
image.setAttribute("src", "https://cdn.vox-cdn.com/thumbor/TpSR9XxMkMsxNE5i25oTkWoBV0U=/0x0:2257x1320/1200x628/filters:focal(1129x660:1130x661)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png");
image.classList.add('img-flluid');
// ändra style
mainDiv.style.backgroundColor= 'yellow'


//------------- Nu ska vi ta bort element från HTML. -------------
let oldDiv = document.querySelector('.old-div')
document.body.removeChild(oldDiv)

//------------- Nu ska skapa och skicka en ny elemet från HTML. -------------
let newDiv = document.createElement('div')
newDiv.innerText = "This is a new DIV"
document.body.appendChild(newDiv)

