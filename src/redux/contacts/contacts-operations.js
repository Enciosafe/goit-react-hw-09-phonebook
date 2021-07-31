import axios from "axios";
import actions from './contacts-actions'






// const fetchContacts = () => dispatch => {
//     dispatch(actions.fetchContactRequest());
//
//     axios.get('/contacts')
//         .then(({data}) => dispatch(actions.fetchContactSuccess(data)))
//         .catch(error => dispatch(actions.fetchContactError(error)))
// }

const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactRequest());

    try {
        const {data} = await axios.get('/contacts')
        dispatch(actions.fetchContactSuccess(data))
    } catch (error) {
        dispatch(actions.fetchContactError(error.message))
    }
}



const addContact = item => dispatch => {
    dispatch(actions.addContactRequest());

    axios
        .post('/contacts', item)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error.message)));
}


const delContact = id => dispatch => {
    dispatch(actions.delContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(actions.delContactSuccess(id)))
        .catch(error => dispatch(actions.delContactError(error.message)))

}


export default {addContact, delContact, fetchContacts}