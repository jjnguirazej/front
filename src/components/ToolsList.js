import React, { useState, useEffect } from "react";
import ToolDataService from "../services/ToolService";

const ToolsList = () => {
  const [tools, setTools] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  useEffect(() => {
    retrieveTools();
  }, []);

  const retrieveTools = () => {
    ToolDataService.getAll()
        .then(response => {
          setTools(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };
    
    return (

        <div className="container mb-2 flex mx-auto w-full items-center justify-center">
            <h4>Tool List</h4>

            <ul className="flex flex-col p-4">
                {/* {tools && tools.map((tool, index)=>(
                  <li key={index} className="border-gray-400 flex flex-row mb-2">
                    <div className="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-red-400 hover:shadow-2xl">

                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">
                            {tool.title}
                            </div>
                        </div>
                        <div className="w-1/4 text-wrap text-center text-white text-bold flex flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2">
                            delete
                        </div>
                    </div>
                </li>
                ))} */}
          
            </ul>
        </div>
    )
};
export default ToolsList;