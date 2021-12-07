import React from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


const App = () => {

  const [user, setLoginUser] = useState({})
  return (
    <>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch> */}

      <Home />
      {
          user && user._id ? <Home /> : <Login setLoginUser={setLoginUser}/>
      }
      <Register />
      <Login setLoginUser={setLoginUser}/>

    </>

  )
}
export default App
