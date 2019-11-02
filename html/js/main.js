var socket, logElement, statusElement;

document.addEventListener("DOMContentLoaded", function(){
    logElement = document.getElementById("logContainer");
    statusElement = document.getElementById("status");

    if (typeof(io) != "undefined"){
        socket = io();
    } else {
        log("Error loading socket.io");
        return;
    }
    
    log("Started up");

    socket.on('handshake', function(data){
        log("connected to server");
    
    });
    

});







function log(msg){
    console.log(msg);
    logElement.innerHTML = logElement.innerHTML + "<br/><span>" + msg + "</span>";
}

function setStatus(msg){
    statusElement.innerHTML = msg;
}

