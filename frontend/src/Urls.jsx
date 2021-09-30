
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import NewTermForm from "./components/NewTermForm";

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
function PrivateRoute({ isAuthenticated, children, ...rest}) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

function Urls(props) {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login/"> <Login {...props} /></Route>                    
            <PrivateRoute exact path="/" isAuthenticated={props.isAuthenticated}><Home {...props}/></PrivateRoute>
            <Route path='/' exact component={Home} />            
            <Route path='/new_term' exact component={NewTermForm} /> 
              
          </Switch>
        </BrowserRouter>
      </div>
    )
};

export default Urls;