import "./Form.css"
import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import {addContact, contacts } from "../Data/data"

export default function Form() {

    const [surnameState, setSurnameState] = useState('')
    const [nameState, setNameState] = useState('')
    const [cityState, setCityState] = useState('')
    const [phoneState, setPhoneState] = useState('')
    const [emailState, setEmailState] = useState('')

    const surnameChange = (e) => {
        setSurnameState(e)
    }
    const nameChange = (e) => {
        setNameState(e)
    }
    const cityChange = (e) => {
        setCityState(e)
    }
    const phoneChange = (e) => {
        setPhoneState(e)
    }
    const emailChange = (e) => {
        setEmailState(e)
    }

    const createNewContact = (e) => {
        e.preventDefault()

        if(surnameState != '' && nameState != '' && cityState != '' && phoneState != '' && emailState  != ''){
            const newContact = {
                id: uuidv4(),
                surname: surnameState,
                name: nameState,
                city: cityState,
                phone: phoneState,
                email: emailState
            }
    
           addContact(newContact)
           console.log(contacts)
        }
    }

    useEffect(() => {
       
    }, [])

    return (
        <div className="custom-form-style">
            <h2>Ajouter un contact</h2>
            <hr />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
                onSubmit={createNewContact}
            >
                <TextField className="custom-input-style" id="surName" label="Nom" variant="outlined" onChange={e => surnameChange(e.target.value)} />
                <TextField className="custom-input-style" id="name" label="Prénom" variant="outlined" onChange={e => nameChange(e.target.value)} /><br />
                <TextField className="custom-input-style" id="city" label="Ville" variant="outlined" onChange={e => cityChange(e.target.value)} />
                <TextField className="custom-input-style" id="phone" label="Téléphone" variant="outlined" onChange={e => phoneChange(e.target.value)} /><br />
                <TextField className="custom-input-style" id="email" label="Email" variant="outlined" onChange={e => emailChange(e.target.value)} />
                <Button className="custom-button-style" variant="outlined" type="submit">Valider</Button>
            </Box>
        </div>

    )
}