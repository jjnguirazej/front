import React, { useState, useEffect } from "react";
import ToolDataService from "../services/ToolService";

const ToolsList = () => {
  const [tools, setTools] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  useEffect(() => {
    retrieveTools();
  }, []);

  const onChangeSearchTag = e => {
    const searchTag = e.target.value;
    setSearchTag(searchTag);
    console.log(searchTag)
  };
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

        <div>
    <ul>
        {tools.map(tool=>(
            <li key={tool.id}>{tool.title}</li>
        ))}
    </ul>
        </div>

  );
};
export default ToolsList;