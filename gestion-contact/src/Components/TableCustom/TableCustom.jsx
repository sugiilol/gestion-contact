import * as React from 'react';
import "./TableCustom.css"
import ModalFormCustom from '../ModalFormCustom/ModalFormCustom'
import ModalValidationDeleteCustom from '../ModalValidationDeleteCustom/ModalValidationDeleteCustom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import { useSelector } from "react-redux"


export default function TableCustom() {

    const contacts = useSelector((state) => state.contact)
    

    return (
        <div className='wrapper-table'>
            <h2>Liste de contacts</h2>
            <TableContainer component={Paper} className='custom-table-style'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell align="right">Prénom</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Ville</TableCell>
                            <TableCell align="right">Téléphone</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow
                                key={contact.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {contact.surname}
                                </TableCell>
                                <TableCell align="right">{contact.name}</TableCell>
                                <TableCell align="right">{contact.age}</TableCell>
                                <TableCell align="right">{contact.city}</TableCell>
                                <TableCell align="right">{contact.phone}</TableCell>
                                <TableCell align="right">{contact.email}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete">
                                        {/* <DeleteIcon /> */}
                                        <ModalValidationDeleteCustom contact={contact}/>
                                    </IconButton>
                                    <IconButton aria-label="edit">
                                        <ModalFormCustom contact={contact}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}