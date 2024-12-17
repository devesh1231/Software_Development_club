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
        <div className="h-screen flex items-center justify-center border border-black">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-md   shadow-md flex-col items-center justify-center border border-black">
           
                <input
                 type="email"
                 placeholder="Enter Email"
                 onChange={(e) => setEmail(e.target.value)}
                 required 
                 className="items-center justify-center rounded-sm border border-black text-sm p-2"
                />
            

            <div>
               
                <input
                 type="password"
                 placeholder="Enter your Password"
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 className="items-center justify-center rounded-sm border border-black mt-2 text-sm p-2 mb-2"
                />
            </div>
            <SignInWithGoogle/>
            <div>
                <button 
                  className="border bg-blue-500 px-4 py-1 mt-4 rounded-md text-xs text-white"
                 >
                    Login
                </button>
            </div>

           

        </form>
        </div>
    )
}

export default Login ;