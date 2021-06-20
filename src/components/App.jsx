import ParticlesBackground from "./ParticlesBackground";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Banner from './Banner'
const App = () => {
  return (
    <>
    <Banner/>
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
