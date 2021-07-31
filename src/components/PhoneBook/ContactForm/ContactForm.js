
import React, {useCallback, useState} from "react";
import InputForm from "./InputForm/InputForm";
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {contactsOperations, contactsSelectors} from '../../../redux/contacts'


const ContactForm = () => {

    const contacts = useSelector(contactsSelectors.getContacts)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')
    const [state, setState] = useState({name: '', number: '', id: '',})
    const dispatch = useDispatch()
    const onSubmit = useCallback((data) => {
        dispatch(contactsOperations.addContact(data))
    }, [dispatch])

    const handleNameChange = e => {
        setName(e.target.value)
        setState({...state, name: e.target.value})
    }

    const handleNumberChange = e => {
        setNumber(e.target.value)
        setState({...state, number: e.target.value})
    }

    const addContact = e => {
        e.preventDefault();
        contacts.some( elem => elem.name === state.name )
            ? alert(`${state.name} is already exist in contacts`)
            : onSubmit(state)
        setState({...state, id: uuidv4() })
        reset()

    }



    const reset = () => {
        setName('')
        setNumber('')
        setId('')
        setState({name: '', number: '', id: ''})
    }

        return (
            <InputForm
                name={name}
                number={number}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                addContact={addContact}
            />
        );
}


export default ContactForm