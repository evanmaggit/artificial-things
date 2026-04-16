/* 

Default JavaScript 

Instead of document.addEventListener() with DOMContentLoaded, put your initialization code inside the "initalize()" function.
Make sure its starting line is "export function initializePage() {" and leave in the first console log message.

Your first statement should be to call confirmTheme() with the name of your theme, as shown below.

*/

// start your JS here
export function initializePage() {

    // call main function that outputs message to console and update page title
    confirmTheme("zany-palm-tree");

}

    // Im having a ton of fun with this
    document.querySelector("h1").textContent = " Zany Palm Tree Mode ";

    // lil animation
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach((p, i) => {
        p.style.opacity = 0;
        p.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            p.style.transition = "all 0.6s ease";
            p.style.opacity = 1;
            p.style.transform = "translateY(0)";
        }, i * 200);
    });

    // tropical color splash!!
    const colors = ["#00b894", "#fdcb6e", "#e17055", "#0984e3"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector("h1").style.color = randomColor;