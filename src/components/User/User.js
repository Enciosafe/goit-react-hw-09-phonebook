import React, {useCallback} from 'react';
import s from './User.module.css'
import {useDispatch, useSelector} from "react-redux";
import {authSelectors, authOperations} from '../../redux/auth'
import defaultAvatar from './cristiano-ronaldo-icon.png'
import {Button} from "@material-ui/core";



const User = () => {


    const name = useSelector(authSelectors.getUserName)
    const avatar = defaultAvatar
    const dispatch = useDispatch()
    const onLogout = useCallback(() => {
        dispatch(authOperations.logOut())
    }, [dispatch])


    return (
        <div className={s.container}>
            <img className={s.avatar} src={avatar} alt={name}/>
            <span className={s.name}>Welcome, {name}!</span>
            <Button type='button' onClick={onLogout}>Logout</Button>
        </div>
    );
};


export default User;