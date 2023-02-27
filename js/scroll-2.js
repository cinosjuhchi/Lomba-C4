var content = document.getElementById("sidebar");
var button = document.getElementById("btn");

button.onclick = function() {
    if (content.className == "open") {
        content.className = "";
        button.className = "";
    }  else{
        content.className = "open";
        button.className ="open";

    }
};