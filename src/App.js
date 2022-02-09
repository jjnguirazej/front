
import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddTools from "./components/AddTools";
import Tools from "./components/Tools";
import ToolsList from "./components/ToolsList";


function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="h-full w-full absolute bg-gray-200 justify-center">
  <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20 ">
   
    <h1 className=" font-bold  justify-center text-black text-4xl">VTTR</h1>

    <div className="py-2"> 
      <h6 className=" font-bold  text-black">Very Useful Tools to Remember</h6>
    </div>

      <div class="transform relative flex items-center px-6 py-4 bg-gray-600 text-white  mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
     
           <div className="flex border-2 rounded ">
              <div className="flex items-center justify-center px-4 border-l bg-white">

                <svg className="w-6 h-6 text-black " fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"       
                viewBox="0 0 24 24">                                    
                <path                                    
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
           </div>

              <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>  
           </div>

           <div className="flex items-center justify-center ml-2">
              <label className="inline-flex items-center">                                 
              <input type="checkbox" className="w-6 h-6  border-0 rounded-md focus:ring-0" />                                 
              <span className="ml-2">Search in tags only</span>                                 
              </label>                              
            </div>
  
              <div class="flex-auto">
              </div>
            <a href="#" class="text-center text-white hover:text-gray-300">Add</a>
        </div>            
    
    
    
    
    <div class="border-l-2 mt-10">
      
      
      <div class="transform transition cursor-pointer hover:-translate-y-2 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
       
        <div class="flex-auto">
         <a> <h1 class="text-lg">Git</h1> </a>
          <h3 class="text-sl">something here</h3>
          <h6>#Classroom</h6>
        </div>
        <a href="#" class="text-center text-white hover:text-gray-300">Remove</a>

      </div>

    </div>
  </div> 
  </div>
   
// {/* <div className="h-full w-full absolute bg-gray-200 justify-center">


           
// <div className="overlay flex flex-row items-center justify-center">
//         <div className="flex flex-row  lg:w-auto lg:flex-row">
       
//         <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
//                 <div className="container items-center ">
//                     <h1 className=" font-bold  justify-center text-black">VTTR</h1>
//                     <h6 className=" font-bold  text-black">Very Useful Tools to Remember</h6>
                  
//                     <div className="flex justify-between py-1 px-5">
//                             <div className="flex flex-row space-x-4 items-center justify-center">
//                               <div className="flex border-2 rounded ">
//                                 <div className="flex items-center justify-center px-4 border-l bg-white">
//                                 <svg className="w-6 h-6 text-black " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24">
//                                     <path
//                                     d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
//                                  </svg>
//                                 </div>
                              
//                                 <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                              
//                               </div>

//                               <div className="flex items-center justify-center">
//                                 <label className="inline-flex items-center">
//                                 <input type="checkbox" className="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" />
//                                 <span className="ml-2">Search in tags only</span>
//                                 </label>
//                               </div>
//                                   <div className="flex items-center justify-end">
//                                   <>
//       <button
//         className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         add
//       </button>
//       {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">
//                     Modal Title
//                   </h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>



//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>



                                 
//                                  </div>

//                                  <div className="flex items-center justify-end">
                                
//                                   <Routes>
//                                     <Route path="/add" element={<AddTools/>} />
//                                     <Route path="/tools" element={<ToolsList/>} />
//                                     {/*<Route path="/tools/:id" element={<Tools/>} />*/}
//                                     </Routes>
//                                  </div>                             
//                       </div>
//                    </div>
//                 </div>     
//             </div>

//         </div>
        
//       </div>
  

//     <div className="container mb-2 flex mx-auto w-full  justify-center">

//         <ul className="flex flex-col p-4">

//             <li className="border-gray-400 w-90 flex flex-row mb-2">
//                 <div className="select-none  flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2  border-2 p-6 mt-3 border-black hover:shadow-2xl">

//                     <div className="flex-1 pl-1 w-80">
//                         <div className="font-medium">
//                             Target audience of startup
//                         </div>
//                     </div>
//                     <div className="w-1/4 text-wrap text-center text-white text-bold flex flex-col  bg-gray-500 justify-center items-center  p-2">
//                         delete
//                     </div>
//                 </div>
//             </li>


//         </ul>
//     </div>
      

// </div>  */}



        
   
  );
}

export default App;
