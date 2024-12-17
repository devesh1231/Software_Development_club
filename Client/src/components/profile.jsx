import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";


function Profile() {
    
    const navigate = useNavigate() ;

    async function logout() {

        try{ 
            await auth.signOut() ;
            navigate("/") ;
            console.log("User log out successfully") ;
        } catch(error) {
            console.error("Error loggin out", error.message) ;
        }
        
    }
    
    return(
        <>
        <p className="text-blue-600">Welcome</p>
         Welcome to SDC Club 
         <div onClick={logout} >
            <button>
                Log Out
            </button>
         </div>
        </>
    )
}

export default Profile ;