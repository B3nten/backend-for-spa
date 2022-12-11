import React from "react";

export default function Entry() {
	const [lol, slol] = React.useState(0);
	const data = document.getElementById("data").innerHTML
	return (
		<>
			<h1>Hydration test</h1>
			<button onClick={() => slol(lol + 1)}>Click me! {lol}</button>
			<h2>Fetched Data</h2>
			<pre>{data}</pre>
		</>
	);
}
