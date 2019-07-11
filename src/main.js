
class Data {
    constructor () {
        this.domain = document.domain,
        this.time = Date.now(),
        this.visits = 1,
        this.url = window.location.href
    }

    
}
const pickles = new Data();
var test = pickles.domain.href;
let domainText = JSON.stringify(pickles.domain)
let update;
/*
// test reset
console.log(document.getElementById("reset"));
document.getElementById("reset").addEventListener("click", function() {
  chrome.storage.local.set(
  {
  "data":[],
  "lastReset": `${new Date()}`
  }
  )
})
// keep for set
window.onload = () => {
  let resetButton = document.getElementById("#reset");
  console.log(resetButton);
  resetButton.addEventListener("click", function() {
    chrome.storage.local.set(
    {
    "data":[],
    "lastReset": `${new Date()}`
    }
    )
  }
  )
}
*/
<<<<<<< HEAD
// chrome.storage.local.set({"data":[]}, ()=>{console.log("reset hit")});
  // chrome.storage.local.set({"lastReset": `${new Date()}`});


window.onload = () => {
  function resetData(){
    console.log("hi")
  }
  let resetButton = document.createElement("BUTTON");
  let buttonText = document.createTextNode("Reset");
  resetButton.addEventListener("click", resetData); 
  resetButton.appendChild(buttonText);
  document.body.appendChild(resetButton);
}  
=======



// chrome.storage.local.set({"data":[]})
function resetData(){
  chrome.storage.local.set({"data":[]}, ()=>{console.log("reset hit")});
  chrome.storage.local.set({"lastReset": `${new Date()}`});
}
let resetButton = document.createElement("BUTTON");
let buttonText = document.createTextNode("Reset");
resetButton.addEventListener("click", resetData); 
resetButton.appendChild(buttonText);
>>>>>>> 84bd7199ef2ea1755a47b93b05bc9609071d0c48

window.onload = chrome.storage.local.get(['data'], function(domain){
  console.log(domain);
  console.log(Array.isArray(domain.data));
  
  let visitCount = 1;
  for(let item of domain.data){
    if(item.domain === document.domain){
      visitCount++;
    }
  }
  pickles.visits = visitCount;
  
  //adding domain element, excluding popup domain
  if(document.domain === "fniinplphnaobhbaobohdlgbhkkpgnaj"){
    const button = document.getElementById('reset');
    console.log("inside the popup");
    console.log(button);
    const domainEl = document.createElement("p");
    domainEl.textContent = domain.data[domain.data.length - 1].domain;
    const popup = document.getElementById('popup');
    popup.appendChild(domainEl);
    const visitsEl = document.createElement("p");
    const visits = document.getElementById('visits');
    visitsEl.textContent = domain.data[domain.data.length - 1].visits;
    visits.appendChild(visitsEl);
    document.body.appendChild(resetButton);
  }
  //if current domain isn't popup, push domain info to data
  if(document.domain !== "fniinplphnaobhbaobohdlgbhkkpgnaj"){
    domain.data.push(pickles)
    update = domain.data;
    window.onload = chrome.storage.local.set({"data":update});
  }
  
});


// window.onload = () => {
//   const domainEl = document.createElement("p");
//   domainEl.textContent = domainText;
//   // console.log(Data.domain)
//   const popup = document.getElementById('popup');
//   popup.appendChild(domainEl);
// }