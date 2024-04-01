import {
  createRoot
} from "react-dom/client";

function Hero() {
  return ( <
    >
    <
    h1 > Welcome to our supermarket < /h1> <
    p > Start shopping < /p> <
    />
  );
}

// do not modify
createRoot(document.querySelector("#react-root")).render( < Hero > < /Hero>);