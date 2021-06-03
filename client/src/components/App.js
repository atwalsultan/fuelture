import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import Tools from "./Tools";
import About from "./About";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home}></Route>
			<Route path="/articles" component={Articles}></Route>
			<Route path="/tools" component={Tools}></Route>
			<Route path="/about" component={About}></Route>

			<Footer></Footer>
		</Router>
	);
}

export default App;
