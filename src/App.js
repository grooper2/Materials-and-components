import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import NavBars from "./Pages/NavBars";
import Inputs from "./Pages/Inputs";
import Cards from "./Pages/Cards";
import Buttons from "./Pages/Buttons";
import NavBar_1 from "./Components/navBar_1";

function App() {
  return (
    <div>
      <Router>
        <main>
          <NavBar_1 />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/navBars" component={NavBars} />
            <Route path="/Inputs" component={Inputs} />
            <Route path="/Cards" component={Cards} />
            <Route path="/Buttons" component={Buttons} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
