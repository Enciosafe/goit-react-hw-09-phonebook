import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import s from "./Phonebook.module.css"
import Filter from "./Filter/Filter";
import {contactsOperations, contactsSelectors} from "../../redux/contacts";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {useEffect} from "react";


const Phonebook = () => {

    const dispatch = useDispatch()
    const contacts = useSelector(contactsSelectors.getContacts)


    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch])



    return <>
        <div className={s.container}>
            <div className={s.itemLeft}>
                <h1 className={s.Phonebook}>📞 Phonebook</h1>
                <ContactForm contacts={contacts}/>
            </div>
            <div className={s.item}>
                <div>
                    <h1 className={s.Phonebook}>Contacts️</h1>
                    <ContactList/>
                </div>
            </div>
            <div className={s.itemRight}>
                <div>
                    <h1 className={s.Phonebook}>Filter ️👀</h1>
                    {contacts.length === 0 && <span className={s.Phonebook}>you don't have any contact ☹️</span>}
                    {contacts.length > 1 && <Filter/>}
                </div>
            </div>
        </div>
    </>
}





export default Phonebook;


Phonebook.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
        })
    )
};
