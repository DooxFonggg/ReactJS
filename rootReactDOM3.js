import React from "react";
import {
    createRoot
} from "react-dom/client";

const root = document.querySelector("#react-root")

const element = React.createElement("h1", {
    className: "title"
}, "Online Supermarket")

createRoot(root).render(element);