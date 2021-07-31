import React, {useCallback, useState} from 'react';
import s from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {authOperations} from "../../redux/auth";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";



const Registration = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState({name: '', email: '', password: ''})

    const dispatch = useDispatch()
    const onRegister = useCallback((data) => {
        dispatch(authOperations.register(data))
    }, [dispatch])


    const handleChange = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'name':
                setName(value)
                setState({...state, name: value})
                break;
            case 'email':
                setEmail(value)
                setState({...state, email: value})
                break;
            case 'password':
                setPassword(value)
                setState({...state, password: value})
                break;
                default:
                return alert
                console.error('no data!')
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        setState({name: name, email: email, password: password})
        onRegister(state);
        setState({name: '', email: '', password: ''})
    }



    return (
            <div  className={s.container}>
                <div>
                    <h1 className={s.registration}>REGISTRATION</h1>
                    <form onSubmit={handleSubmit}
                          autoComplete='off'
                          className={s.containerForm}
                    >
                        <TextField
                            id="standard-basic"
                            label="name"
                            type="name"
                            name="name"
                            value={name}
                            onChange={handleChange} >
                        </TextField>
                        <TextField
                            id="standard-basic"
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange} >
                        </TextField>
                        <TextField
                            id="standard-basic"
                            label="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange} >
                        </TextField>
                        <Button className={s.button} type={"submit"}>registration</Button>
                    </form>
                </div>
            </div>
        );

};


export default Registration;