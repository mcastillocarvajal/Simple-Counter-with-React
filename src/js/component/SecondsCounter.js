import React from "react";
import PropTypes from "prop-types";

const containerStyle = {
	background: "black",
	height: "120px",
	width: "100%",
	textAlign: "center"
};

const cardStyle = {
	display: "inline-block",
	height: "80px",
	width: "70px",
	background: "#101010",
	color: "white",
	fontSize: "60px",
	textAlign: "center",
	margin: "20px 5px"
};

export const SecondsCounter = props => {
	return (
		<div style={containerStyle}>
			<div className="fas fa-clock" style={cardStyle}></div>
			<div style={cardStyle}>
				{Math.floor(props.seconds / 100000) % 10}
			</div>
			<div style={cardStyle}>
				{Math.floor(props.seconds / 10000) % 10}
			</div>
			<div style={cardStyle}>{Math.floor(props.seconds / 1000) % 10}</div>
			<div style={cardStyle}>{Math.floor(props.seconds / 100) % 10}</div>
			<div style={cardStyle}>{Math.floor(props.seconds / 10) % 10}</div>
			<div style={cardStyle}>{props.seconds % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
