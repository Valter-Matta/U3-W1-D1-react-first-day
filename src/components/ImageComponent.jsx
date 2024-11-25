import { Component } from "react";

class ImageComponent extends Component {
	render() {
		return (
			<img
				src={this.props.src}
				alt={this.props.title}
				style={{
					borderRadius: 30 + "px",
					boxShadow: "0 0 15px 20px rebeccapurple",
				}}
			/>
		);
	}
}

export default ImageComponent;
