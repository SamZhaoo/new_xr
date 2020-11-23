import React from "react";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import login from '../views/Login'
import home from '../views/Home'

function AppRouter(){
    return(
        <Router>
            <Route path="/" exact component={login} />
            <Route path="/home" exact component={home} />
        </Router>
    )
}
export default AppRouter;