import ParticlesBackground from "./ParticlesBackground";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Router>
        
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
