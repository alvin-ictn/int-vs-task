import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material';
import { closeDialog } from '../redux/actions/dialog'

export default function DialogComponent() {
    const dispatch = useDispatch();
    const dialogData = useSelector(state => state.data);
    return (
        <Dialog open={dialogData.dialog} onClose={() => dispatch(closeDialog())}>
            <DialogTitle>Change Content #{dialogData.oldData.id}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={dialogData.oldData.title}
                />
                <TextField multiline
                    rows={4}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Body"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={dialogData.oldData.body}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(closeDialog())}>Cancel</Button>
                <Button onClick={() => dispatch(closeDialog())}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}
