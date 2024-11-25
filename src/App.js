import "./App.css";
import AddButton from "./components/AddButton";
import ImageComponent from "./components/ImageComponent";

const url = "https://flatlogic.com/blog/wp-content/uploads/2021/06/12-1.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddButton name="Bottone creato" />
				<ImageComponent src={url} title="react" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
