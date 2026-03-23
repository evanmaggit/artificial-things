/* 

Light Mode JavaScript 

Instead of document.addEventListener() with DOMContentLoaded, put your initialization code inside the "initalize()" function.
Make sure its starting line is "export function initializePage() {" and leave in the first console log message.

*/

// start your JS here
export function initializePage() {

    // output message to console
    console.log("Light Mode style loaded");

    // move the aside to the end of main
    let currentAside = document.querySelector("aside");
    document.querySelector("main").append(currentAside);

    let newAsideTitle = document.createElement("h2");
    newAsideTitle.innerHTML = "Types of Design";
    currentAside.insertBefore(newAsideTitle, currentAside.children[0]);

}
