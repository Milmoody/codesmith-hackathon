
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
let update;
// also not working
/*
function setLocal(name){
  chrome.storage.local.set(name);
}
*/

// window.onload = setLocal(pickles);

// keep for set
// chrome.storage.local.set({"data":[]});


window.onload = chrome.storage.local.get(['data'], function(domain){
  console.log(domain);
  console.log(Array.isArray(domain.data));
  
  let visitCount = 1;
  for(let item of domain.data){
    // console.log(domain.data)
    if(item.domain === document.domain){
      // console.log(item.domain === window.location.href);
      // console.log(window.location.href);
      visitCount++;
      // console.log(visitCount)
    }
  }
  pickles.visits = visitCount;
  domain.data.push(pickles)
  update = domain.data;
  window.onload = chrome.storage.local.set({"data":update});
});


// outdated beginning code
/*
//get data from JSON file with XML HTTP Request
let getData = new XMLHttpRequest();
getData.open('GET', '/history/data.json', true);

getData.onload = function () {
    // Convert JSON data to an object
    let data = JSON.parse(this.response);
  let output = '';
    
}

  getData.send();
  console.log(getData)
*/