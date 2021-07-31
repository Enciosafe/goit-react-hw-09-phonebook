import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import {authOperations} from "../../redux/auth";
import {Button, TextField} from "@material-ui/core";
import s from "./Login.module.css"


const Login = () => {

    const dispatch = useDispatch()
    const onLogin = useCallback((data) => {
        dispatch(authOperations.logIn(data))
    }, [dispatch])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState({email: '', password: ''})

    const handleEmailChange = e => {
        setEmail(e.target.value)
        setState({...state, email: e.target.value})
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
        setState({...state, password: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setState({email: email, password: password})
        onLogin(state)
        setState({name: '', email: '', password: ''})
    }


    return (
        <div className={s.container}>
            <div>
                <h1 className={s.login}>LOGIN FORM</h1>
                <form onSubmit={handleSubmit}
                      autoComplete='off' className={s.containerForm}>
                    <TextField
                        id="standard-basic"
                        label="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}>
                    </TextField>
                    <TextField
                        id="standard-basic"
                        label="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}>
                    </TextField>
                    <Button className={s.button} type={"submit"}>SignIN</Button>
                </form>
            </div>
        </div>
    );
}


export default Login;
