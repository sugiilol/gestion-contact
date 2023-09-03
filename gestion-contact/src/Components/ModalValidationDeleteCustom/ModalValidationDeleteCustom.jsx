import * as React from 'react';
import { useState } from 'react';
import "./ModalValidationDeleteCustom.css"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useDispatch } from "react-redux"

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 100,
    bgcolor: 'var(--main-bg-color)',
    color: 'var(--main-font-color)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalValidationDeleteCustom(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(props)

    const dispatch = useDispatch()

    const handleDeleteContact = (id) => {
        dispatch({
            type: "contact/deleteContact",
            payload: id
        })
    }

    return (
        <div>
            <DeleteIcon onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    noValidate
                    autoComplete="off"
                >
                    <h2>supprimer {props.contact.surname} {props.contact.name} ??</h2>
                    <br />
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => handleDeleteContact(props.contact.idFireStore)}>Valider</Button>
                        <Button onClick={() => handleClose()}>Annuler</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}