import React, { useState } from "react";

const TrafficLight = () => {
	const [activeLight, setActiveLight] = useState([""]);
	return (
		<>
			<div className="container">
				<div className="trafficTop"></div>
				<div className="trafficBox">
					<div
						className={`light red ${
							activeLight === "red" && "lightOn"
						}`}
						onClick={() => setActiveLight("red")}></div>
					<div
						className={`light yellow ${
							activeLight === "yellow" && "lightOn"
						}`}
						onClick={() => setActiveLight("yellow")}></div>
					<div
						className={`light green ${
							activeLight === "green" && "lightOn"
						}`}
						onClick={() => setActiveLight("green")}></div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;
