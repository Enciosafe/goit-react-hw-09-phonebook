
import { createAction } from '@reduxjs/toolkit'




const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');


const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const delContactRequest = createAction('contacts/delContactRequest');
const delContactSuccess = createAction('contacts/delContactSuccess');
const delContactError = createAction('contacts/delContactError');

const changeFilter = createAction('contacts/filteredContacts');





const contactsActions = {changeFilter,
    addContactRequest, addContactSuccess, addContactError,
    delContactRequest, delContactSuccess, delContactError,
    fetchContactRequest, fetchContactSuccess, fetchContactError}

export default contactsActions




// const addContact = (data) => ({
//     type: types.ADD,
//     payload: ({
//         name: data.name,
//         number: data.number,
//         id: data.id,
//         sex: data.sex,
//     })
// })
// const delContact = (id) => ({
//     type: types.DEL,
//     payload: id
// })
// const changeFilter = (value) => ({
//     type: types.FILTER,
//     payload: value,
// })