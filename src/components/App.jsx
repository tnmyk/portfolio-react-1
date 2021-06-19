import ParticlesBackground from "./ParticlesBackground";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";
const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
