"use strict"

const images = {
    "one": "mona lisa",
    "two": "girl with a pearl earring"
}

const removeResults = (image) => {
    if (document.getElementById(`${image}Failure`) !== null) {
        document.getElementById(`${image}Failure`).remove();
    }
    if (document.getElementById(`${image}Success`) !== null) {
        document.getElementById(`${image}Success`).remove();
    }
}

const init = () => {
    for (const image in images) {
        document.getElementById(image).onclick = () => {
            document.getElementById(image).src = `images/${image}.jpg`;
            console.log(document.getElementById(`${image}Check`).style.display);
            document.getElementById(`${image}Check`).style.visibility = "visible";
        }
        document.getElementById(`${image}Submit`).onclick = () => {
            if (document.getElementById(`${image}Input`).value.toLowerCase() === images[image]) {
                removeResults(image);
                document.getElementById(image).insertAdjacentHTML("afterend", `<div id='${image}Success' class='alert alert-success'><strong>Correct answer</strong></div>`);
            } else {
                removeResults(image);
                document.getElementById(image).insertAdjacentHTML("afterend", `<div id='${image}Failure' class='alert alert-danger'><strong>Incorrect answer</strong></div>`);
            }
        }
    }
}

window.onload = init;

