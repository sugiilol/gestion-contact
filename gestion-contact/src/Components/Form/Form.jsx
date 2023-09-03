import "./Form.css"
import * as React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Form() {

    const dispatch = useDispatch()

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

    const resetForm = () => {
        setSurnameState('')
        setNameState('')
        setCityState('')
        setPhoneState('')
        setEmailState('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (surnameState !== '' && nameState !== '' && cityState !== '' && phoneState !== '' && emailState !== '') {
            dispatch({
                type: "contact/addContact",
                payload: {
                    surname: surnameState,
                    name: nameState,
                    city: cityState,
                    phone: phoneState,
                    email: emailState
                }
            })
            resetForm()
        }
    }

    return (
        <div className="custom-form-style">
            <h2>Ajouter un contact</h2>
            <hr />
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField className="custom-input-style" id="surName" label="Nom" value={surnameState} variant="outlined" onChange={e => surnameChange(e.target.value)} />
                <TextField className="custom-input-style" id="name" label="Prénom" value={nameState} variant="outlined" onChange={e => nameChange(e.target.value)} /><br />
                <TextField className="custom-input-style" id="city" label="Ville" value={cityState} variant="outlined" onChange={e => cityChange(e.target.value)} />
                <TextField className="custom-input-style" id="phone" label="Téléphone" value={phoneState} variant="outlined" onChange={e => phoneChange(e.target.value)} /><br />
                <TextField className="custom-input-style" id="email" label="Email" value={emailState} variant="outlined" onChange={e => emailChange(e.target.value)} />
                <Button className="custom-button-style" variant="outlined" type="submit">Valider</Button>              
            </Box>
        </div>
    )
}