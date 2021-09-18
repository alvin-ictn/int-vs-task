import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material/'
import { useDispatch } from 'react-redux'
import { openDialog } from '../redux/actions/dialog'

export default function CardComponent({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardContent>
          <Grid container wrap="wrap" alignItems="center" justifyContent="space-between">
            <Grid>
              <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                #{data.id}
              </Typography>
            </Grid>
            <Grid>
              <EditIcon className="icon" onClick={() => dispatch(openDialog({data, mode: 'edit'}))} />
              <DeleteIcon className="icon" onClick={() => dispatch(openDialog({data, mode: 'delete'}))} />
            </Grid>
          </Grid>
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2">
            {data.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

    </>
  );
}