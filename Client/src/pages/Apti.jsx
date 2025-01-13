

// export function Apti () {
//     return (
//         <section className="flex flex-row justify-around items-center bg-slate-100 p-5">
         
//           <div className="">
//             <select className="bg-[#153243] b rounded-md p-2 text-white font-rale">
//                 <option value="Aptitute">Aptitute</option>
//                 <option value="DSA">DSA</option>     
//             </select>
//           </div>

//           <div>
//           <select className="bg-[#153243] b rounded-md p-2 text-white font-rale">
//                 <option value="subCat1">Sub category1</option>
//                 <option value="subCat2">sub category2</option>     
//             </select>
//           </div>

//           <div>
//           <select className="bg-[#153243] b rounded-md p-2 text-white font-rale">
//                <option value="Objective">Objective</option>
//                <option value="SubJective">Descriptive</option>     
//            </select>
//           </div>

//           <button className="bg-[#153243] b rounded-md p-2 text-white font-rale px-5">Filter</button>
    
//         </section>
        
//     )
// }

import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import CategoryCards from '../components/common/Categories';
import Footer from '../components/common/Footer';

export function Apti() {
    // State to manage selected values
    const [aptitude, setAptitude] = useState('Aptitute');
    const [subCategory, setSubCategory] = useState('subCat1');
    const [objectiveType, setObjectiveType] = useState('Objective');

    // Dynamic options for select elements
    const aptitudeOptions = ['Aptitute', 'DSA', 'Algorithms'];
    const subCategoryOptions = ['Sub category1', 'Sub category2', 'Sub category3'];
    const objectiveTypeOptions = ['Objective', 'Descriptive'];

    const handleFilter = () => {
        // Implement filter logic here
        console.log(`Filtering with: ${aptitude}, ${subCategory}, ${objectiveType}`);
    };

    return (
        <>
        <section className="flex flex-row justify-around items-center bg-slate-100 p-5 rounded-lg shadow-md">
            <div>
                <select 
                    className=" bg-slate-100 rounded-md p-2 font-rale hover:bg-slate-300 hover:border-none"
                    value={aptitude}
                    onChange={(e) => setAptitude(e.target.value)}
                >
                    {aptitudeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div>
                <select 
                    className=" bg-slate-100 rounded-md p-2 font-rale hover:bg-slate-300 hover:border-none"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                >
                    {subCategoryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div>
                <select 
                    className=" bg-slate-100 rounded-md p-2 font-rale hover:bg-slate-300 hover:border-none"
                    value={objectiveType}
                    onChange={(e) => setObjectiveType(e.target.value)}
                >
                    {objectiveTypeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <button 
                className="bg-[#153243] rounded-md p-2 text-white font-rale px-5 hover:bg-[#72acc5]"
                onClick={handleFilter}
            >
                Filter
            </button>
        </section>
        
        <section className='mt-5 p-5 '>
          <h1 className='font-rale text-[#c65b7c] font-extrabold text-5xl ml-6'>
          <Typewriter
           options={{
           strings: ['Welcome to SDC Club ....'],
           autoStart: true,
           loop: true,
           stop:true
           }} 
           />
          </h1>
          <p className='font-rale text-[#f9ada0] font-medium text-xl leading-relaxed ml-6'>Aptitude questions and answers for your placement interviews and competitive exams!</p>
         
          <CategoryCards/>
        
        </section>
        <Footer/>
        </>
    );
}
