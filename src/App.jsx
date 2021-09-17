import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getArticle } from './redux/actions/article'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle({start: 1, end: 100}));
  },[dispatch])

console.log(useSelector(state => state.data.article))
  return (
    <div className="App">
      {JSON.stringify(useSelector(state => state.data.article))}
    </div>
  );
}

export default App;
