const body = $("body")[0];
const expansionRate = 0.05;
const numStars = 150;

function drawStar() {

    let x_pos = body.offsetWidth * Math.random();
    let y_pos = body.offsetHeight * Math.random();

    const star = document.createElement("span");
    star.classList.add("star");
    star.style.position="absolute";
    star.style.left = x_pos+"px";
    star.style.top = y_pos+"px";
    body.appendChild(star);
};

function drawNStars(n) {
    for (let i = 0; i < n; i++) {
        drawStar();
    }
}

function drawStarsExpanded() {
    let stars = $(".star");
    for (let i = 0; i < stars.length; i++) {
        let curStar = stars[i];

        const starExpanded = document.createElement("span");
        starExpanded.classList.add("star-expanded");
        starExpanded.style.position="absolute";
        starExpanded.style.left = (curStar.offsetLeft * (1+expansionRate)) + "px";
        starExpanded.style.top = (curStar.offsetTop * (1+expansionRate)) + "px";
        body.appendChild(starExpanded);
    }
};

drawNStars(numStars);
drawStarsExpanded();

document.addEventListener("mousemove", function(e) {
    let deltaX = (e.clientX) * (expansionRate);
    let deltaY = (e.clientY) * (expansionRate);

    for (let i = 0; i < $(".star-expanded").length; i++) {
        let curStar = $(".star")[i];
        let curExpanded = $(".star-expanded")[i];

        curExpanded.style.left = ((curStar.offsetLeft * (1+expansionRate)) + deltaX) + "px";
        curExpanded.style.top = ((curStar.offsetTop * (1+expansionRate)) + deltaY) + "px";
    }
});