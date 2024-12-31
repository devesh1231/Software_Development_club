import Footer from "../components/common/Footer.jsx";
import Header from "../components/common/Header.jsx";
import hacker from "../assets/HackerImage.jpg" ;
import amazon from "../assets/amazon.png" ;
import atlassian from "../assets/atlassian.png" ;
import blackrock from "../assets/blackrock.jpg" ;
import meta from "../assets/meta.png" ;
import netflix from "../assets/netflix.png" ;
import samsung from "../assets/samsung.png" ;
import microsoft from "../assets/microsoft.png" ;
import google_logo from "../assets/google_log.jpg" ;
import akash from "../assets/akash.jpg" ;
import devesh from "../assets/devesh.jpg" ;
import akash2 from "../assets/akash2.jpg" ;
import FAQ from "../components/common/Faq.jsx" ;

function Home(){
  
  return (
     <div className="">
       
       {/* Banner */}
       <div className="flex flex-col md:flex-row items-center justify-between p-20 ">
       
       {/* Left part */}
       <section className=" w-auto md:w-[50%]">
         <h1 className="text-[#284B63] text-[50px] leading-tight font-rale">Start your coding journey today</h1>
         <p className="text-gray-500 mt-10 font-rale">Learn to code from scratch with </p> 
         <p className="text-gray-500 font-rale">practice oriented roadmap designed by experts</p>
       </section> 

       {/* Right part */}
       <section className="mt-10 lg:mt-0">
        <img src={hacker} className="rounded-lg"/>
       </section> 

       </div> 

      {/* main section questionaries */}

      <div class="main-section bg-gray-100 mt-0 p-10">
        
        <div class="container mx-auto px-6 lg:w-[1080px]">
        <h2 class="text-3xl font-bold text-center text-blue-600 mb-8 font-rale">Why Coding Matters</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-20">
        
        {/* <!-- Question 1 --> */}
         <div class="p-6 bg-white shadow-sm rounded-lg hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 font-rale">Why Coding?</h3>
          <p class="text-gray-600 font-rale text-sm">
           <i>Coding is the language of the future. It allows us to build technology, automate tasks, and create innovations that transform industries and lives.</i>
          </p>
         </div>
        
        {/* <!-- Question 2 --> */}
         <div class="p-6 bg-white shadow-sm rounded-lg hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 font-rale">How is it Important?</h3>
          <p class="text-gray-600 font-rale text-sm">
           <i>Coding teaches problem-solving, enhances logical thinking, and opens doors to endless career opportunities in a tech-driven world.</i>
          </p>
         </div>
        
        {/* <!-- Question 3 --> */}
         <div class="p-6 bg-white shadow-sm rounded-lg hover:shadow-2xl transition duration-300">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 font-rale">What Do Giants Believe?</h3>
          <p class="text-gray-600 font-rale text-sm">
           <i>Leaders like Bill Gates and Elon Musk emphasize the importance of coding, calling it the backbone of innovation and technological advancement.</i>
          </p>
         </div>
       
         </div>
        </div>

      </div>
    
     
  <section className="flex mb-10 gap-20 w-[100%] mx-auto rounded-lg overflow-hidden bg-white">
  
  <marquee  scrollamount="15" behavior="scroll" direction="right" className="bg-white mb-0 ">
      <img src={google_logo} className="inline-block h-10 w-36 mr-20"/>
      <img src={microsoft} className="inline-block h-10 w-36 mr-20"/>
      <img src={atlassian} className="inline-block h-10 w-36 mr-20"/>
      <img src={amazon} className="inline-block h-10 w-36 mr-20"/>
      <img src={netflix} className="inline-block h-10 w-36 mr-20"/>
      <img src={meta} className="inline-block h-10 w-36 mr-20"/>
      <img src={blackrock} className="inline-block h-10 w-36 mr-20"/>
      <img src={samsung} className="inline-block h-10 w-36 mr-20"/>

     
    </marquee>
  
  

  </section>


  <h2 className="text-3xl font-semibold text-center p-5 text-blue-600 font-rale bg-white">
    Testimonial
  </h2>

  <section className="flex items-center justify-center  bg-white "> 

    <div className="carousel max-w-4xl mt-5 mb-5 p-5 rounded-lg"> 
      
      <div id="item1" className="carousel-item w-full flex items-start justify-center gap-5 ">
        <div><img src={akash} alt="akash" className="w-[200px] h-[250px] rounded-md shadow-xl"/></div>
        <div className="w-[60%] leading-relaxed mt-3">
          <p className="text-2xl font-rale text-justify mb-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut eaque repellendus eligendi dolores exercitationem neque culpa, hic in adipisci, impedit nisi sequi similique, fugiat provident rem saepe consequatur ratione?"</p>
          <i>---Akash Dubey workign as Full Stack Intern</i>
        </div>
      </div>

      <div id="item2" className="carousel-item w-full flex items-start justify-center gap-5">
        <div><img src={akash2} alt="akash" className="w-[200px] h-[250px] rounded-md shadow-xl"/></div>
        <div className="w-[60%] leading-relaxed mt-3">
          <p className="text-2xl font-rale text-justify mb-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut eaque repellendus eligendi dolores exercitationem neque culpa, hic in adipisci, impedit nisi sequi similique, fugiat provident rem saepe consequatur ratione?"</p>
          <i>---Akash Dubey workign as Full Stack Intern</i>
        </div>
      </div>

      <div id="item3" className="carousel-item w-full flex items-start justify-center gap-5">
        <div><img src={devesh} alt="akash" className="w-[200px] h-[250px] rounded-md shadow-xl"/></div>
        <div className="w-[60%] leading-relaxed mt-3">
          <p className="text-2xl font-rale text-justify mb-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut eaque repellendus eligendi dolores exercitationem neque culpa, hic in adipisci, impedit nisi sequi similique, fugiat provident rem saepe consequatur ratione?"</p>
          <i>---Akash Dubey workign as Full Stack Intern</i>
        </div>
      </div>
      
    </div>

  </section>

<div className="flex w-full justify-center gap-2 py-2 bg-white h-[100px]">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  
</div>

  <div className="bg-slate-100 p-10">
   <FAQ/>
  </div>
   

   <Footer/>
   </div>
   
    )
}

export default Home ;