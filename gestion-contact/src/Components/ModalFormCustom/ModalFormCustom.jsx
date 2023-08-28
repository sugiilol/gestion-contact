import * as React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalFormCustom(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("modal => ", props)

  return (
    <div>
      <EditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField className="custom-input-style" id="surName" label="Nom" value={props.contact.surname} variant="outlined" />
          <TextField className="custom-input-style" id="name" label="Prénom" value={props.contact.name} variant="outlined" /><br />
          <TextField className="custom-input-style" id="city" label="Ville" value={props.contact.city} variant="outlined" />
          <TextField className="custom-input-style" id="phone" label="Téléphone" value={props.contact.phone} variant="outlined" /><br />
          <TextField className="custom-input-style" id="email" label="Email" value={props.contact.email} variant="outlined" />
          {/* <Button className="custom-button-style" variant="outlined" type="submit">Valider</Button> */}
        </Box>
      </Modal>
    </div>
  );
}