import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import SignInWithGoogle from "./signInWidthGoogle";

function Login() {
    
    const [email, setEmail] = useState("") ;
    const [password, setPassword] = useState("") ;
    
    const Navigate = useNavigate() ;

    const handleSubmit = async(e) => {
      e.preventDefault() ;

      try {
        await signInWithEmailAndPassword(auth, email, password) ;
        console.log("User logged Successfully") ;

        Navigate("/profile") ;

      } catch (error) {
        console.log(error.message) ;
      }
    }


    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h3>Login Page</h3>

            <div>
                <lable>Email</lable>
                <input
                 type="email"
                 placeholder="Enter Email"
                 onChange={(e) => setEmail(e.target.value)}
                 required 
                />
            </div>

            <div>
                <lable>Password</lable>
                <input
                 type="password"
                 placeholder="Enter your Password"
                 onChange={(e) => setPassword(e.target.value)}
                 required
                />
            </div>
            <SignInWithGoogle/>
            <div>
                <button>
                    Login
                </button>
            </div>

           

        </form>
        </div>
    )
}

export default Login ;