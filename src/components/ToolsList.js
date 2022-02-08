import React, { useState, useEffect } from "react";
import ToolDataService from "../services/ToolService";
import { Link } from "react-router-dom";
const ToolsList = () => {
  const [tools, setTools] = useState([]);
  const [currentTool, setCurrentTool] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTag, setSearchTag] = useState("");
  useEffect(() => {
    retrieveTools();
  }, []);
  const onChangeSearchTag = e => {
    const searchTag = e.target.value;
    setSearchTag(searchTag);
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
  const refreshList = () => {
    retrieveTools();
    setCurrentTool(null);
    setCurrentIndex(-1);
  };
  const setActiveTool = (tool, index) => {
    setCurrentTool(tool);
    setCurrentIndex(index);
  };
  const removeAllTools = () => {
    ToolDataService.removeAll()
        .then(response => {
          console.log(response.data);
          refreshList();
        })
        .catch(e => {
          console.log(e);
        });
  };
  const findByTitle = () => {
    ToolDataService.findByTitle(searchTag)
        .then(response => {
          setTools(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  };
  return (
      <></>
  );
};
export default ToolsList;