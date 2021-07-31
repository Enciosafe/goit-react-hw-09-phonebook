import React from 'react';
import s from "./AppBar.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/auth";
import Button from '@material-ui/core/Button';



const Navigation = () => {

    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

    return (
        <div className={s.leftContainer}>
            <Button>
                <NavLink to={'/home'} className={s.item}>Home</NavLink>
            </Button>
            <Button>
                {isAuthenticated && <NavLink to={'/contacts'} className={s.item}>Phonebook</NavLink>}
            </Button>

        </div>
    );
};



export default Navigation;