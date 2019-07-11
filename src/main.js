
class Data {
    constructor () {
        this.domain = document.domain,
        this.time = Date.now(),
        this.visits = 1,
        this.url = window.location.href
      }
      
      
    }
    const pickles = new Data();
    let update;
    
    // resets the data in storage and store a date value in ms
    function resetData(){
      chrome.storage.local.set({"data":[]}, ()=>{console.log("reset hit")});
      chrome.storage.local.set({"lastReset": `${new Date()}`});
    }
    // creates a reset button in popup.html
    let resetButton = document.createElement("BUTTON");
    let buttonText = document.createTextNode("Reset");
    resetButton.addEventListener("click", resetData); 
    resetButton.appendChild(buttonText);
    //
    
    // ***  grabs data from storage
    window.onload = chrome.storage.local.get(['data', 'lastReset'], function(domain){
      console.log(domain);
      console.log(Array.isArray(domain.data));
      
      let visitCount = 1;
      for(let item of domain.data){
        if(item.domain === document.domain){
          visitCount++;
        }
      }
      pickles.visits = visitCount;
    
      //if current domain isn't popup, push domain info to data
      if(document.domain !== "eimgppkmnopgdadgbffgccnflanmjonh"){
        domain.data.push(pickles)
        update = domain.data;
        window.onload = chrome.storage.local.set({"data":update});
      }
      
      //adding domain element, excluding popup domain
      if(document.domain === "eimgppkmnopgdadgbffgccnflanmjonh"){
        //create popup in DOM
        const popup = document.getElementById('popup');
        //create domain name element in DOM
        const domainEl = document.createElement("p");
        domainEl.textContent = domain.data[domain.data.length - 1].domain;
        popup.appendChild(domainEl);
        //

        //create visits count element in DOM
        const visitsEl = document.createElement("p");
        const visits = document.getElementById('visits');
        visitsEl.textContent = domain.data[domain.data.length - 1].visits;
        visits.appendChild(visitsEl);
        //

        //create last reset element in DOM
        const lastResetEl = document.createElement("p");
        const lastResetText = document.getElementById('last-reset');
        lastResetEl.textContent = domain.lastReset;
        lastResetText.appendChild(lastResetEl);
        //

        // creates the reset button at the bottom of the popup.html
        const button = document.getElementById('reset');
        console.log("inside the popup");
        console.log(button);
        document.body.appendChild(resetButton);
        //
      }
      
      
    });
    // *** all of get data *** //

    // var test = pickles.domain.href;
    // let domainText = JSON.stringify(pickles.domain)
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



// chrome.storage.local.set({"data":[]})


// window.onload = () => {
//   const domainEl = document.createElement("p");
//   domainEl.textContent = domainText;
//   // console.log(Data.domain)
//   const popup = document.getElementById('popup');
//   popup.appendChild(domainEl);
// }