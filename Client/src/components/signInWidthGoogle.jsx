import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import googleImage from "../assets/google.png" ;
import { useNavigate } from "react-router-dom";

function SignInWithGoogle() {
    
    const navigate = useNavigate() ;

    function googleLogin() {
        const provider = new GoogleAuthProvider() ;
        signInWithPopup( auth, provider).then( async(result) => {
            console.log(result) ;
            if( result.user) {
               navigate("/profile") ;
            }
        }) ;
    }
    
    return(
       <>
       <p style={{display:"flex", justifyContent:"center", fontSize:"10px", fontFamily:"sans-serif"}}>---or continue with</p>
       <div style={{display:"flex", justifyContent:"center", cursor:"pointer"}} onClick={googleLogin}>
         <img src={googleImage} width={"60%"}/>
       </div>
       </>
    )
}

export default SignInWithGoogle ;