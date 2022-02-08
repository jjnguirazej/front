import React, { useState } from "react";
import ToolsDataService from "../services/ToolService";
const AddTools = () => {
  const initialToolsState = {
    id: null,
    title: "",
    description: "",
    link: "",
    tags: "",

  };
  const [tools, setTools] = useState(initialToolsState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTools({ ...tools, [name]: value });
  };
  const saveTools = () => {
    var data = {
      title: tools.title,
      description: tools.description,
      link: tools.link,
      tags: tools.tags
    };
    ToolsDataService.create(data)
        .then(response => {
          setTools({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            link: response.data.link,
            tags: response.data.tags

          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };
  const newTools = () => {
    setTools(initialToolsState);
    setSubmitted(false);
  };
  return (

      <div className="h-screen bg-gradient-to-br  flex justify-center items-center w-full">
              {submitted ? (
                  <div class="py-3 px-5 mb-4 bg-gray-100 text-gray-900 rounded-md text-sm border border-gray-200" role="alert">
                       <strong>Tool saved successfully!</strong> 
                    </div>
                    ) : (
          <div className="bg-white px-10 py-8  w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">Add new Tool</h1>
              <div>
                <label htmlFor="title" className="block mb-1 text-gray-600 font-semibold">Tool Name</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                      id="title"
                      required
                      value={tools.title}
                      onChange={handleInputChange}
                      name="title"/>
              </div>
              <div>
                <label htmlFor="description" className="block mb-1 text-gray-600 font-semibold">Tool Description</label>
                <textarea type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  
                   id="description"
                   required
                   value={tools.description}
                   onChange={handleInputChange}
                   name="description"
                   />
              </div>
              <div>
                <label htmlFor="description" className="block mb-1 text-gray-600 font-semibold">Tool Link</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                id="link"
                required
                value={tools.link}
                onChange={handleInputChange}
                name="link"
                />
              </div>
              <div>
                <label htmlFor="tags" className="block mb-1 text-gray-600 font-semibold">Tags</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                id="tags"
                required
                value={tools.tags}
                onChange={handleInputChange}
                name="tags"
                />
              </div>
            </div>
            <button onClick={saveTools}
                className="mt-4 w-full bg-black text-indigo-100 py-2 rounded-md text-lg tracking-wide">Add Tools
            </button>
          </div>
       )}
      </div>
  );
};
export default AddTools;