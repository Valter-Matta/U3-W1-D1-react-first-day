const ButtonComponent = props => {
	return (
		<section>
			<button
				className="p-3"
				style={{
					padding: 2 + "em",
					marginBottom: 2 + "em",
					backgroundColor: "rebeccapurple",
					fontSize: 1 + "rem",
					color: "yellow",
					borderRadius: 35 + "px",
				}}
			>
				{props.name}
			</button>
		</section>
	);
};

export default ButtonComponent;
