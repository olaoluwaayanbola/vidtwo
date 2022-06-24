import './App.css';
import Login from './Components/Pages/LoginSign/Login';
import { Route,Routes,Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useContext } from 'react';
import { contextAuth } from './Context/Authcontex';
function App() {
  const AuthRoutes = ({children}) => {
    return currentUser? (children) : <Navigate to="/"/>
  }
  const {currentUser} = useContext(contextAuth)
  console.log(currentUser.email)
  return (
    <>
      <Routes>
        <Route path='/' element={
            <Login></Login>}/>
        <Route path='/m' element={
          <AuthRoutes >
            <Navbar></Navbar>
          </AuthRoutes>
        }/>  
      </Routes> 
    </>
  );
}

export default App;
