import _ from "lodash";
import printMe from "./print.js";
// import "./style.css";
// import MyImage from "./juju.jpg";

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add("hello");

    btn.innerHTML = "Click Me!";
    btn.onclick = printMe;

    element.appendChild(btn);

    // const myImg = new Image();
    // myImg.src = MyImage;
    // element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());
