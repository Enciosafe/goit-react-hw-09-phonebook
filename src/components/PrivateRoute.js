import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {authSelectors} from "../redux/auth";
import {connect} from "react-redux";

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo}/>
        }
      />
);

const mapDispatchToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapDispatchToProps)(PrivateRoute);