import React, {useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import LoginService from "./LoginService";

const PrivateRoute = ({component: Component, ...rest}) => {
    const [loggedIn, setLoggedIn] = useState(false);

    LoginService.isLoggedIn().then(result => {
        setLoggedIn(result);
    }).catch(err => {
       console.log(err);
    });

    return (
        <Route {...rest} render={props => loggedIn ? (
            <Component {...props} /> ) : (
                <Redirect to={{pathname: '/ssuzalal/login', state: {from: props.location}}}/> )
        } />
    )
}

export default PrivateRoute;