import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LogIn } from '../components/login/LogIn';
import NavBar from '../components/ui/NavBar';
import { Usuarios } from '../components/usuarios/Usuarios';


export const AppRouter = () => {
    return (
            <Router>
              <div>
               <NavBar/> 
        
 
                <Switch>
                  <Route exact path="/usuarios" component={ Usuarios} />
                  <Route exact path="/login" component={ LogIn } />
                </Switch>
              </div>
            </Router>
    )
}
