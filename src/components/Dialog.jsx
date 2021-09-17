import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material';
import { closeDialog } from '../redux/actions/dialog'
import { patchArticle } from '../redux/actions/article'

export default function DialogComponent() {
    const dispatch = useDispatch();
    const dialogData = useSelector(state => state.data);
    const [oldData, setPatchData] = useState({}); 

    useEffect(() => {
        setPatchData(dialogData.oldData)
    },[dialogData, dispatch]);

    const handleClose = () => {
        setPatchData({});
        dispatch(closeDialog());
    }

    const handleSubmit = async () => {
        await dispatch(closeDialog());
        await dispatch(patchArticle(oldData));
        await setPatchData({});
    }

    return (
        <Dialog open={dialogData.dialog} onClose={handleClose}>
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
                    value={oldData.title}
                    onChange={(event) => {
                        setPatchData({...oldData, title: event.target.value})
                    }}
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
                    value={oldData.body}
                    onChange={(event) => {
                        setPatchData({...oldData, body: event.target.value})
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}
