var body = document.body;
function generate_fish() {
    var fish = document.createElement("h".concat(Math.floor(Math.random() * 6) + 1));
    fish.innerText = "><>";
    fish.style.position = "absolute";
    fish.style.left = "0px";
    fish.style.top = "".concat(Math.floor(Math.random() * body.clientHeight) + 1, "px");
    body.appendChild(fish);
    setInterval(function () {
        var left = parseInt(fish.style.left.substring(0, fish.style.left.length - 2));
        if (left >= Math.round((body.clientWidth * 0.98))) {
            fish.remove();
        }
        fish.style.left = "".concat(left + 1, "px");
    }, 5);
    return fish;
}
setInterval(generate_fish, 150);
