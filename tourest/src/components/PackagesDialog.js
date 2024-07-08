import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const PackagesDialog = ({title, description}) => {
    console.log(title,description)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" className="package-button" onClick={handleClickOpen}>
                Open Packages Dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle><h1>{title}</h1></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    {description && description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default PackagesDialog;

