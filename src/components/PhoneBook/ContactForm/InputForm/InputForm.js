import React from 'react';
import s from "./InputForm.module.css";
import {Button, TextField} from "@material-ui/core";


const InputForm = ({name, number, handleNameChange, handleNumberChange, addContact}) => {

    return <>
        <form onSubmit={addContact}
        >
            <div>
                <TextField
                    id="standard-basic"
                    label="name"
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleNameChange}
                    required
                >
                </TextField>
            </div>
            <div>
                <TextField
                    id="standard-basic"
                    label="number"
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={handleNumberChange}
                    required
                >
                </TextField>
            </div>

            <div>
                <Button type="submit"
                        className={s.btn}>Add contact</Button>
            </div>
        </form>
    </>
}

export default InputForm