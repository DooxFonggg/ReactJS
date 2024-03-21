import React from "react";
import {
    createRoot
} from "react-dom/client";

function createCard() {
    const element = document.createElement("div");
    element.className = "card";
    return element;
}

console.log(createCard);