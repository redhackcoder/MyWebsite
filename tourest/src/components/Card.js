import React, { useState } from 'react';
import './Card.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Card = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        {/* <ul className="card-description">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul> */}
        <Button variant="contained" color="primary" className="package-button" onClick={handleClickOpen}>
          View Details
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {description.map((point, index) => (
                <a href='/trip'><li key={index}>{point}</li></a>
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
    </div>
  );
};

export default Card;
