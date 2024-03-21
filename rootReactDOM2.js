import React from "react";
import {
    createRoot
} from "react-dom/client";

const root = document.querySelector("#root")

const element = React.createElement("h1", {}, "Online Supermarket")

createRoot(root).render(element);