import React, {
    cloneElement
} from "react";

function createDivElement() {
    const react = React.createElement("div", {}, "Hello World!");
    return react
}

console.log(createDivElement());

function createTitle() {
    return React.createElement("h1", {
        className: "hero-title"
    }, "Welcome to our supermarket");
}

// sample usage (do not modify)
console.log(createTitle());