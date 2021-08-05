import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./home/Home";
import Articles from "./news/Articles";
import Tools from "./tools/Tools";
import About from "./about/About";
import Stations from "./stations/Stations";
import Header from "./Header";
import Footer from "./Footer";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header></Header>
			
			<Route path="/" exact component={Home}></Route>
			<Route path="/news" component={Articles}></Route>
			<Route path="/tools" component={Tools}></Route>
			<Route path="/stations" component={Stations}></Route>
			<Route path="/about" component={About}></Route>

			<Footer></Footer>
		</Router>
	);
}

export default App;
