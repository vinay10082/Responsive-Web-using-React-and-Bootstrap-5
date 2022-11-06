import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import FloatingButton from './components/FloatingButton/FloatingButton';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { fetchAllPosts } from './actions/post';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPosts())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router >
        <Navbar />
        <AllRoutes />
        <FloatingButton />
      </Router >
    </div>
  );
}

export default App;
