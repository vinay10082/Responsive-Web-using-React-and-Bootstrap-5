import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import FloatingButton from './components/FloatingButton/FloatingButton';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
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
