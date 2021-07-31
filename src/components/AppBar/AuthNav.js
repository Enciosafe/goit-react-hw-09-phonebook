import React from 'react';
import s from "./AppBar.module.css";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

const activeStyles = {
    activeLink: {
        color: '#E84A5F'
    }
}

const AuthNav = () => {
    return (
        <div className={s.rightContainer}>
            <Button>
                <NavLink to={'/registration'} className={s.item} activeStyle={activeStyles.activeLink}>Registration</NavLink>
            </Button>
            <Button>
                <NavLink to={'/login'} className={s.item} activeStyle={activeStyles.activeLink}>Authentication</NavLink>
            </Button>
        </div>
    );
};

export default AuthNav;