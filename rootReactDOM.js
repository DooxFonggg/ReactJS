import React from "react";
import {
    createRoot
} from "react-dom/client";


const root = document.querySelector("#root");

const element = React.createElement("p", {}, "Hello Word");

createRoot(root).render(element);