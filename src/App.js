
import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddTools from "./components/AddTools";
import Tools from "./components/Tools";
import ToolsList from "./components/ToolsList";


function App() {
  return (
  
   
<div className="h-full w-full absolute bg-gray-200 justify-center">


           
<div className="overlay flex flex-row items-center justify-center">
        <div className="flex flex-row  lg:w-auto lg:flex-row">
       
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
                <div className="container items-center ">
                    <h1 className=" font-bold  justify-center text-black">VTTR</h1>
                    <h6 className=" font-bold  text-black">Very Useful Tools to Remember</h6>
                  
                    <div className="flex justify-between py-1 px-5">
                            <div className="flex flex-row space-x-4 items-center justify-center">
                              <div className="flex border-2 rounded ">
                                <div className="flex items-center justify-center px-4 border-l bg-white">
                                <svg className="w-6 h-6 text-black " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                 </svg>
                                </div>
                              
                                <input type="text" className="px-4 py-2 w-80" placeholder="Search..."/>
                              
                              </div>

                              <div className="flex items-center justify-center">
                                <label className="inline-flex items-center">
                                <input type="checkbox" className="w-6 h-6 text-green-600 border-0 rounded-md focus:ring-0" />
                                <span className="ml-2">Search in tags only</span>
                                </label>
                              </div>
                                  <div className="flex items-center justify-end">
                                 <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
                                    Button
                                 </button> 
                                 </div>

                                 <div className="flex items-center justify-end">
                                
                                  <Routes>
                                    <Route path="/add" element={<AddTools/>} />
                                    <Route path="/tools" element={<ToolsList/>} />
                                    <Route path="/tools/:id" element={<Tools/>} />
                                    </Routes>
                                 </div>                             
                      </div>
                   </div>
                </div>     
            </div>

    
      
        </div>
        
      </div>
     
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-center pb-4 border-b border-gray-300">                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                          It has survived not only five centuries, but also the leap into electronic typesetting, 
                          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      </div>
      
                 
</div> 



        
   
  );
}

export default App;
