// create new variable (create new instance of the XMLHttpRequest() object)
var xhr = new XMLHttpRequest();

// open a connection to communicate with the web server
xhr.open("GET", "https://swapi.co/api/");

xhr.send();

// listener to see xhr state:
// create a new function | check whenever the state changes | if all is ok retrieve our data div
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = this.responseText;
        // console.log(JSON.parse(this.responseText));
        data = this.responseText;
    }
};

console.log(data);


