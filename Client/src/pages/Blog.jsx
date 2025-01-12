import { useEffect } from "react";
import img1 from "../assets/blog/img1.avif" ;
import img2 from "../assets/blog/img2.avif" ;
import img3 from "../assets/blog/img3.avif" ;
import { getAllBlog } from "../services/operations/blog.js";

function Blog(){

    useEffect(()=>{
      getAllBlog(); 
    },[])
   
    
    return(
        <section className="grid grid-cols-2 gap-x-5 gap-y-5 max-w-6xl mx-auto mt-1">
           <div className=" flex flex-col items-center justify-center">
            <img src={img1} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

          <div className=" flex flex-col items-center justify-center">
            <img src={img2} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

          <div className=" flex flex-col items-center justify-center">
            <img src={img3} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

          <div className=" flex flex-col items-center justify-center">
            <img src={img1} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

          <div className=" flex flex-col items-center justify-center">
            <img src={img2} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

          <div className=" flex flex-col items-center justify-center">
            <img src={img3} alt="img2" className="max-w-[500px] max-h-[400px]"/>
            <div>
             <p className="mt-4 text-[12px] font-mono text-gray-400 mb-1">name | December 16, 2024</p>
             <h1 className="font-rale font-semibold text-xl text-justify text-black max-w-[500px] max-h-[110px] overflow-hidden p-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sapiente quae perferendis, quibusdam sunt exercitationem. Et dolore vel, facere dolorum doloremque maiores nam temporibus iusto inventore amet totam, ipsa sint.</h1>
             <p className="text-gray-400 text-md text-justify max-w-[400px]">subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>

        </section>
    )
}

export default Blog ;