import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px solid #000',
    borderRadius: "4px",
	boxShadow: 24,
	p: 4,
};

export default function MyModal({children,action, title, label}) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>{children}</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography id='modal-modal-description' sx={{mt: 2}}>
						{title ? title : "title"}
					</Typography>
                    <Box sx={{marginTop: "20px", display: "flex", justifyContent: "space-between"}}>
                        <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                        <Button variant='contained' onClick={action}>{label ? label : "Click"}</Button>
                    </Box>
				</Box>
			</Modal>
		</div>
	);
}
