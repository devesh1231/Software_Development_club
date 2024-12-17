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
import Home from './pages/Home.jsx';
import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';

function App() {
  
  // const[user, setUser] = useState("") ;
  // useEffect(()=> {
  //   auth.onAuthStateChanged((user)=> {
  //     setUser(user) ;
  //   })
  // })

  return (
    <div className="flex flex-col min-h-screen">
    <Header/>

     <Router>
       <Routes>
        {/* <Route path='/' element={ user? <Navigate to="/profile"/> : <Login/> } /> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
       </Routes>
     </Router>

    <Footer/>
    </div>
  )
}

export default App
