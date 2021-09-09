import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import LoginService from "./LoginService";
import Login from "../container/Login";

const PrivateRoute = ({Component, ...rest}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    LoginService.isLoggedIn().then(result => {
        setLoggedIn(result);
        console.log(result);
        console.log(Component);
        console.log(...rest);
    }).catch(err => {
       console.log(err);
    });

    return (
        <Route exact path="/" component={loggedIn ? Component : Login} />
    )
}

export default PrivateRoute;