import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {contactsOperations, contactsSelectors} from '../../../redux/contacts'
import s from "./ContactList.module.css"
import {Button, List, ListItem} from "@material-ui/core";




export default function ContactList () {

    const dispatch = useDispatch()
    const contacts = useSelector(contactsSelectors.getVisibleContacts)

    return <div className={contacts.length > 0 ? s.list: null}>
        <List>
            {contacts.map(({ name, number, id }) => (
                <ListItem className={s.listItem} key={id}>{name}: {number}
                    <Button className={s.button} onClick={() => {dispatch(contactsOperations.delContact(id))}} type="submit" id={id}>delete</Button>
                </ListItem>
            ))}
        </List>
    </div>
}