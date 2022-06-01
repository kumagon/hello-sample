function clickHandler(name) {
    const box = document.getElementById("box");
    const p = document.createElement("p");
    p.innerText = "Added by " + name;
    box.appendChild(p);
}

function clickClear() {
    const box = document.getElementById("box");
    box.innerHTML = '';
}
