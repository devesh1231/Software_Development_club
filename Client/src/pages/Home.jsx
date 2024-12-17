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
     <div className="bg-[#EEF0EB] h-[500px]">
       
       {/* Banner */}
       <div className="flex flex-col md:flex-row items-center justify-between p-20">
       
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

      <div class="main-section bg-gray-100 p-1 ">
        
        <div class="container mx-auto px-6 lg:w-[1080px] mt-20">
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

     
    
    {/* <marquee  scrollamount="15" behavior="scroll" direction="right" className="bg-white ">
      <img src={google_logo} className="inline-block h-10 w-36 mr-20"/>
      <img src={microsoft} className="inline-block h-10 w-36 mr-20"/>
      <img src={atlassian} className="inline-block h-10 w-36 mr-20"/>
      <img src={amazon} className="inline-block h-10 w-36 mr-20"/>
      <img src={netflix} className="inline-block h-10 w-36 mr-20"/>
      <img src={meta} className="inline-block h-10 w-36 mr-20"/>
      <img src={blackrock} className="inline-block h-10 w-36 mr-20"/>
      <img src={samsung} className="inline-block h-10 w-36 mr-20"/>

     
    </marquee> */}

    {/* Testimonial */} 
     
  <section className="flex flex-col justify-center gap-20 mt-24 w-[100%] mx-auto rounded-lg overflow-hidden bg-white">
  
  <marquee  scrollamount="15" behavior="scroll" direction="right" className="bg-white ">
      <img src={google_logo} className="inline-block h-10 w-36 mr-20"/>
      <img src={microsoft} className="inline-block h-10 w-36 mr-20"/>
      <img src={atlassian} className="inline-block h-10 w-36 mr-20"/>
      <img src={amazon} className="inline-block h-10 w-36 mr-20"/>
      <img src={netflix} className="inline-block h-10 w-36 mr-20"/>
      <img src={meta} className="inline-block h-10 w-36 mr-20"/>
      <img src={blackrock} className="inline-block h-10 w-36 mr-20"/>
      <img src={samsung} className="inline-block h-10 w-36 mr-20"/>

     
    </marquee>
  
  <h2 className="text-5xl font-bold text-center text-blue-600 mb-8 font-rale mt-10">
    Testimonial
  </h2>

  {/* Comment 1 */}
  <div className="flex justify-start ml-24 ">
    <section className="flex flex-row justify-between text-[#153243] bg-white max-w-3xl rounded-tr-[90px] h-[300px] shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
      {/* Text */}
      <div className="p-10 w-[60%]">
        <h1 className="font-rale text-[#153243] text-2xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="font-rale text-[#153243] text-md mb-4">
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita delectus placeat sit sed totam culpa nihil enim, cumque et veniam non dolore, magni libero vero distinctio, eos unde sunt.</i>
        </p>
        <i className="text-[#153243]">------ Akash Dubey (Working as Full Stack Developer)</i>
      </div>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={akash}
          alt="akashFeedback"
          className="rounded-tr-[90px] rounded-bl-[90px] h-[300px] w-[300px] object-fill transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  </div>

   {/* Comment 1 */}
   <div className="flex justify-end mr-24 ">
    <section className="flex flex-row justify-between bg-white max-w-3xl rounded-tr-[90px] h-[300px] shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
      {/* Text */}
      <div className="p-10 w-[60%]">
        <h1 className="font-rale text-[#153243] text-2xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="font-rale text-[#153243] text-md mb-4">
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita delectus placeat sit sed totam culpa nihil enim, cumque et veniam non dolore, magni libero vero distinctio, eos unde sunt.</i>
        </p>
        <i className="text-[#153243]">------ Akash Dubey (Working as Full Stack Developer)</i>
      </div>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={devesh}
          alt="akashFeedback"
          className="rounded-tr-[90px] rounded-bl-[90px] h-[300px] w-[300px] object-fill transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  </div>

   {/* Comment 1 */}
   <div className="flex justify-start ml-24 mb-10 ">
    <section className="flex flex-row justify-between bg-white max-w-3xl rounded-tr-[90px] h-[300px] shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
      {/* Text */}
      <div className="p-10 w-[60%]">
        <h1 className="font-rale text-[#153243] text-2xl mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="font-rale text-[#153243] text-md mb-4">
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita delectus placeat sit sed totam culpa nihil enim, cumque et veniam non dolore, magni libero vero distinctio, eos unde sunt.</i>
        </p>
        <i className="text-[#153243]">------ Akash Dubey (Working as Full Stack Developer)</i>
      </div>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={akash2}
          alt="akashFeedback"
          className="rounded-tr-[90px] rounded-bl-[90px] h-[300px] w-[300px] object-fill transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  </div>
</section>

   <FAQ/>
   
   </div>
   
    )
}

export default Home ;