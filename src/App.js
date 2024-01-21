import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
