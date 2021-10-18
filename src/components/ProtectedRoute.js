import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute({component: Component, ...rest}) {

    return (
        <Route {...rest} render={props => requestProtectedContent(Component, props)} />
    )
}

function requestProtectedContent(Component, props){

    let isUserAllowedHere = false;

    if (window.confirm("Press OK if you are the Dungeon Master.")){
        isUserAllowedHere = true;
    }

    return (
        isUserAllowedHere ?
            <Component {...props} />
            :
            <Redirect to="/" />

    )

}

export default ProtectedRoute;