//import { useEffect } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/views/Home'
import Signup from './components/views/Signup'
import Signin from './components/views/Signin'
import Gopost from './components/views/Gopost'
import Me from './components/views/Me'
import Myfollow from './components/views/Myfollow'
import Logout from './components/views/Logout'
import Tools from './components/views/Tools'



import Test from './__test__/Test'



const Router = () => {
/*
  const history = useHistory()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log("user: ", user)
    if (user) {
      //console.log("user 存在")
    }
    else {
      console.log("user 不存在")
      history.push('/signin')
    }
  }, [])
*/

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/gopost">
        <Gopost />
      </Route>
      <Route path="/me">
        <Me />
      </Route>
      <Route path="/myfollow">
        <Myfollow />
      </Route>
      {/*      
      <Route path="/test">
        <Test />
      </Route> 
      */}

      <Route path="/tools">
        <Tools />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>

    </Switch>
  )
}




function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Router></Router>
    </BrowserRouter>

  );
}

export default App;
