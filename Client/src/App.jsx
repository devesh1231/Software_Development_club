import { useEffect, useState } from 'react'
import './App.css'
import Register from './components/register'
import {
  BrowserRouter as Router ,
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom' ; 
import { auth } from './components/firebase';

import Login from './components/login' ;
import SignUp from './components/register' ;
import Profile from './components/profile';

function App() {
  
  // const[user, setUser] = useState("") ;
  // useEffect(()=> {
  //   auth.onAuthStateChanged((user)=> {
  //     setUser(user) ;
  //   })
  // })

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={ user? <Navigate to="/profile"/> : <Login/> } /> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
  )
}

export default App
