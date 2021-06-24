import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'


const App = () => {
  return (
      <>

          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/Contact' component={Contact} />
              <Redirect to="/" />
            </Switch>
          
      </> 
  );
};

export default App;
