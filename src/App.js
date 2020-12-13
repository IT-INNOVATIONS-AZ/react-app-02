import { MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/About" render={() => <p>About</p>} />
      </Switch>
    </Router>
  );
}

export default App;
