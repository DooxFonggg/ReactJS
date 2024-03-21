import React from "react";
import {
    createRoot
} from "react-dom/client";

const root = document.querySelector("#react-root");
/*add code*/
const element = < p className = "selected"
id = "promo" > Hello World < /p>

createRoot(root).render(element)