import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import React, {useState} from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import googleImage from "../assets/google.png"
import SignInWithGoogle from "./signInWidthGoogle";

function Register () {
    
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;
    const [fname, setFname] = useState("") ;
    const [lname, setLname] = useState("") ;
    
    const Navigate = useNavigate() ;

    const handleRegister = async(e) => {
        //to prevent default nature of form to reload
        e.preventDefault() ;
        try{
           // after this is executed getAuth have the data of user and auth.currentUser have the access
           await createUserWithEmailAndPassword(auth, email, password) ;
           const user = auth.currentUser ;
           console.log("User successfully created", user) ;

           // to store in firestore
           if( user ) {
                            // firestore, collection, id
             await setDoc( doc(db, "User", user.uid), {
                email: user.email ,
                firstName: fname ,
                lastName: lname
             }) ;
           }

           Navigate("/profile") ;

        } catch (error){
           console.log(error.message) ;
        }
    }

    
    
    return(
        <div className="form-container">
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>

            <div>
                <label>First Name</label>
                <input 
                  type="text"
                  placeholder="First name"
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
            </div> 

            <div>
                <label>Last Name</label>
                <input
                 type="text"
                 placeholder="Last name"
                 onChange={(e) => setLname(e.target.value)}
                 required
                />
            </div>

            <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
            </div>

            <div>
                <label>Password</label>
                <input
                 type="password"
                 placeholder="Enter Password"
                 onChange={(e) => setPassword(e.target.value)}
                 required
                />
            </div>
            
           
            <SignInWithGoogle/>

            <div>
                <button type="submit">
                    Sign up
                </button>
            </div>
        </form>
        </div>
    )
}

export default Register ;