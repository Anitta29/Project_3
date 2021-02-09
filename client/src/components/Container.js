import React from "react";
import Container from "@material-ui/core/Container";

function WrapContainer(props) {
	return <Container>{props.children}</Container>;
}

export default WrapContainer;
