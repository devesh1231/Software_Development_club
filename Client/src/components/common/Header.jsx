import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
       <header className="w-auto bg-[#153243]" >
            <nav className="p-4 bg-[#153243] max-w-5xl mx-auto h-[100px]">
                <span className="text-white text-[30px] font-bold mr-14 font-rale items-center">SDC Club</span> 
                <input 
                 placeholder="type to search..."
                 className="border border-blue-500 rounded-lg px-5 py-2 mr-10 font-rale text-[15px] focus:outline-none"
                /> 

                <span className="text-white mr-10 font-rale">Home</span>
                <Link to="/blog">
                 <span className="text-white mr-10 font-rale">Blog</span>
                </Link>
               
                <span className="text-white mr-10 font-rale">Apti/DSA</span>
                
                <span className="text-white mr-10 font-rale">Contact</span>
                <span className="text-white mr-10 font-rale">Profile</span>

            </nav>
        </header>
    )
}

export default Header;