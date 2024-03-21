import React from "react";
import {
    createRoot
} from "react-dom/client";

const root = document.querySelector("#react-root");
createRoot(root).render( < h1 > My first JSX < /h1>);