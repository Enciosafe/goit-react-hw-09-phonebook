import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import contactsActions from '../../../redux/contacts/contacts-actions'
import {contactsSelectors} from '../../../redux/contacts'
import s from "./Filter.module.css"
import {TextField} from "@material-ui/core";


const Filter = () => {

    const filter = useSelector(contactsSelectors.getFilter)
    const dispatch = useDispatch()
    const handlerFilter = useCallback((e) => {
        dispatch(contactsActions.changeFilter(e.target.value))
    }, [dispatch])


    return <>
        <p className={s.text}>Find contacts by name:</p>
        <TextField
            id="standard-basic"
            label="search"
            type="text"
            name="filter"
            value={filter}
            onChange={handlerFilter} >
        </TextField>
    </>

}


export default Filter