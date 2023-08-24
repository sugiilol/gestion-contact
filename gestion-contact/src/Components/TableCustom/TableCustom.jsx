import * as React from 'react';
import "./TableCustom.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableCustom() {

    function createData(surName, name, age, city, phone, email) {
        return { surName, name, age, city, phone, email };
    }

    const rows = [
        createData("Leblanc", "Sébastien", 36, "Saint-Savournin", "06-59-05-38-31", "leblanc.sbt@gmail.com"),
        createData("Patoulatchi", "Michel", 68, "Marseille", "06-58-45-68-71", "patou@gmail.com"),
        createData("Doe", "John", 41, "Moncul", "06-80-05-63-39", "taggle@gmail.com"),
        createData("Prout", "Paul", 36, "Paris", "06-59-55-38-31", "prout@gmail.com")
    ];

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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.surName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.surName}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}