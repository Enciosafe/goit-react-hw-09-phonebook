import {combineReducers} from "redux";
import { createReducer } from '@reduxjs/toolkit'
import actions from './contacts-actions'


const {addContactSuccess, delContactSuccess, changeFilter, fetchContactSuccess} = actions



const contacts = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [delContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})


const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    contacts,
    filter,
})


// const contacts = (state = initialItems, {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]
//         case types.DEL:
//             return state.filter(contact => contact.id !== payload)
//         default:
//             return state
//
//     }
// }
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.FILTER:
//             return payload
//         default:
//             return state
//
//     }
// }

