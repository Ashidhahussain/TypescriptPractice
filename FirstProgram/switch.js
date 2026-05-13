"use strict";
let color = "red";
switch (color) {
    case "green":
        console.log("GO");
        break;
    case "Yellow":
        console.log("Start");
        break;
    case "Red":
        console.log("Stop");
        break;
    default:
        console.log("Obey traffic rules"); // this execute only if the above conditions fail
}
