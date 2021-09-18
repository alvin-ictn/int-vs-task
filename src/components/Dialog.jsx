import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material';
import { closeDialog } from '../redux/actions/dialog'
import { patchArticle, postArticle, deleteArticle } from '../redux/actions/article'

export default function DialogComponent() {
    const dispatch = useDispatch();
    const dialogData = useSelector(state => state.data);
    const [oldData, setPatchData] = useState({});

    useEffect(() => {
        (dialogData.mode === "edit" || dialogData.mode === "delete") && setPatchData(() => dialogData.oldData)
    }, [dialogData, dispatch]);

    const handleClose = async () => {
        await dispatch(closeDialog());
        await setPatchData({});
    }

    const handleEdit = async () => {
        let patchData = { id: oldData.id };

        for (let key in oldData) {
            if (oldData[key] !== dialogData.article.filter((item => item.id === oldData.id))[0][key]) {
                patchData[key] = oldData[key]
            }
        }
        await dispatch(patchArticle(patchData));
        await dispatch(closeDialog());
        await setPatchData({});
    }

    const handleSubmit = async () => {
        await dispatch(postArticle(oldData));
        await dispatch(closeDialog());
        await setPatchData({});
    }

    const handleDelete = async () => {
        const { id } = oldData;
        await dispatch(deleteArticle(id));
        await dispatch(closeDialog());
        await setPatchData({});
    }

    return (
        <Dialog open={dialogData.dialog} onClose={handleClose}>
            <DialogTitle>{dialogData.mode === "add" ? "Add New Article" : `${dialogData.mode === "edit" ? "Change" : "Delete"} Content #${dialogData?.oldData?.id}`}</DialogTitle>
            {(dialogData.mode === "add" || dialogData.mode === "edit") && <DialogContent>
                {dialogData.mode === "add" && <TextField
                    autoFocus
                    margin="dense"
                    id="userId"
                    label="userId"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {
                        console.log(oldData)
                        setPatchData({ ...oldData, userId: parseInt(event.target.value) })
                    }}
                />}
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={oldData.title || ""}
                    onChange={(event) => {
                        setPatchData({ ...oldData, title: event.target.value })
                    }}
                />
                <TextField multiline
                    rows={4}
                    autoFocus
                    margin="dense"
                    id="body"
                    label="Body"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={oldData.body || ""}
                    onChange={(event) => {
                        setPatchData({ ...oldData, body: event.target.value })
                    }}
                />
            </DialogContent>}
            <DialogActions>
                <Button onClick={dialogData.mode === "edit" ? handleEdit : dialogData.mode === "add" ? handleSubmit : handleDelete}>{dialogData.mode === "edit" ? "Edit" : dialogData.mode === "add" ? "Add" : "Delete"}</Button>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
