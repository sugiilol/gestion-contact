import * as React from 'react';
import { useState } from 'react';
import "./ModalFormCustom.css"
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from "react-redux"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'var(--main-bg-color)',
  color: 'var(--main-font-color)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalFormCustom(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch()

  const [surnameState, setSurnameState] = useState(props.contact.surname)
  const [nameState, setNameState] = useState(props.contact.name)
  const [cityState, setCityState] = useState(props.contact.city)
  const [phoneState, setPhoneState] = useState(props.contact.phone)
  const [emailState, setEmailState] = useState(props.contact.email)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (surnameState !== '' && nameState !== '' && cityState !== '' && phoneState !== '' && emailState !== '') {
      dispatch({
        type: "contact/editContact",
        payload: {
          id: props.contact.id,
          surname: surnameState,
          name: nameState,
          city: cityState,
          phone: phoneState,
          email: emailState
        }
      })
      handleClose()
    }
  }

  return (
    <div>
      <EditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2>Modifier {props.contact.surname} {props.contact.name}</h2>
          <hr /><br />
          <TextField inputClassName="custom-input-style" id="surName" label="Nom" value={surnameState} variant="outlined" onChange={e => surnameChange(e.target.value)} /><br />
          <TextField inputClassName="custom-input-style" id="name" label="Prénom" value={nameState} variant="outlined" onChange={e => nameChange(e.target.value)} /><br />
          <TextField inputClassName="custom-input-style" id="city" label="Ville" value={cityState} variant="outlined" onChange={e => cityChange(e.target.value)} /><br />
          <TextField inputClassName="custom-input-style" id="phone" label="Téléphone" value={phoneState} variant="outlined" onChange={e => phoneChange(e.target.value)} /><br />
          <TextField inputClassName="custom-input-style" id="email" label="Email" value={emailState} variant="outlined" onChange={e => emailChange(e.target.value)} /><br />
          <Button className="custom-button-style" variant="outlined" type="submit">Valider</Button>
        </Box>
      </Modal>
    </div>
  );
}