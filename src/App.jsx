import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getArticle } from './redux/actions/article'
import Card from './components/Card'
import Dialog from './components/Dialog'
import { Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';

function FloatingActionButtons({ className }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className={className}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle({ start: 1, end: 3 }));
  }, [dispatch])
  console.log(useSelector(state => state))
  return (
    <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {useSelector(state => state.data.article)?.map((data, idx) => <Grid item xs={2} sm={4} md={4} key={idx}><Card data={data} /></Grid>)}
        <Dialog />
        <FloatingActionButtons className="floating" />
      </Grid>
    </Container>

  );
}

export default App;
