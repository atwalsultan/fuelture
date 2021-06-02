import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Articles from "./Articles";
import Tools from "./Tools";
import About from "./About";
import Footer from "./Footer";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async (url = "http://localhost:5000/sales") => {
    const res = await fetch(url);
    const data = await res.json();
    setList(data);
    console.log(data);
  };
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/articles" component={Articles}></Route>
      <Route path="/tools" component={Tools}></Route>
      <Route path="/about" component={About}></Route>

      <Footer></Footer>
      <div>
        {list.map((figure) => (
          <div key={figure._id}>
            <hr />
            <hr />
            <p>{figure["Fuel type"]}</p>
            <p>{figure["Vehicle type"]}</p>
            <p>{figure.Geo}</p>
            <p>{figure["REF_DATE"]}</p>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
