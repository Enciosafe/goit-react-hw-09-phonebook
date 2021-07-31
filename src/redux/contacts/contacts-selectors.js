import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.contacts.contacts
const getFilter = state => state.contacts.filter
const getAllContacts = state => state.contacts.contacts


// const getVisibleContacts = state => {
//     const contacts = getAllContacts(state)
//     const filter = getFilter(state)
//
//     const lowerFilter = filter.toLowerCase()
//
//     return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(lowerFilter))
// }

const getVisibleContacts = createSelector([getAllContacts, getFilter],
    (contacts, filter) => {
        const lowerFilter = filter.toLowerCase()

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(lowerFilter))
    })


export default { getContacts, getFilter, getVisibleContacts}