import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Users from './components/Users'
import UserDetails from './components/UserDetails'


function App(){
  return(
    <>
     <Router>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about-us">About us</Link>
           </li>
           <li>
             <Link to="/contact-us">Contact us</Link>
           </li>
           <li>
             <Link to="/users">Users</Link>
           </li>           
         </ul>
       </nav>

    <Switch>
      <Route path="/about-us">
        <About/>
      </Route>
      <Route path="/contact-us">
        <Contact/>
      </Route>
      <Route path="/users">
        <Users/>
      </Route>
      <Route path="/user/:id" children={<UserDetails/>} />              
      <Route path="/">
        <Home/>
      </Route>      
    </Switch>

     </Router>
    </>
  )
}

export default App