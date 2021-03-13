//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.js";

//render your react application

let counter = 0;

setInterval(() => {
	counter++;
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.querySelector("#app")
	);
}, 1000);
