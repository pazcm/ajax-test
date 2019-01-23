// create new variable
var xhr = new XMLHttpRequest();

// listener to see xhr state:
// create a new function | check whenever the state changes | if all is ok retrieve our data div
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};


// open a connection
xhr.open("GET", "https://swapi.co/api/");

xhr.send();
