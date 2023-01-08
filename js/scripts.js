var main = document.getElementById("main");
var uninteractiveArea = document.getElementById("non-interactive");

uninteractiveArea.addEventListener("mousedown",showFlower);
uninteractiveArea.addEventListener("touchstart",showFlower);

function showFlower(e) {
    var element = document.createElement("img");
    element.src = "https://s1.imagehub.cc/images/2022/12/17/b759845364f145ebe978003df64c74b1.png";
    element.className = "flower";
    element.setAttribute("style","left: " + (e.touches[0].pageX - 150) + "px;top: " + (e.touches[0].pageY - 150) + "px;");
    main.appendChild(element);
    window.setInterval(() => {
        main.removeChild(element);
    },100);
}