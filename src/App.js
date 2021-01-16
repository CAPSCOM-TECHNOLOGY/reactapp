import './App.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"
import Contact from "./components/Contact"
import UserDetails from "./components/UserDetails"
import SI from './components/SI'
function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about-us" component={About}></Route>
          <Route exact path="/contact-us" component={Contact}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/simple-interest" component={SI}></Route>
          <Route exact path="/users/:id" component={UserDetails}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App