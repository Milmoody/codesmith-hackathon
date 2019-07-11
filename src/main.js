// to store current url
window.location.href

class Data {
    constructor () {
        this.domain = window.location.href,
        this.time = 0,
        this.visits = null,
        this.extendedDomains = null
    }

    
}

chrome.storage.local.set({"domain": new Data()});
chrome.storage.local.get(["domain"], function(domain){
  console.log(domain)
});

let testEntry = new Data();
console.log(testEntry);

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