import React, { useEffect, useState } from "react";
import fetchColorService from "../services/fetchColorService";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(async () => {
    const newColors = await fetchColorService()
    console.log('ffffffffffffffffff')
    console.log(newColors)
    setColors(newColors)
    console.log(colors);
  },[]);
  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    // axiosWithAuth().put("/colors/:id")
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });
  };

  const deleteColor = (colorToDelete) => {
    // axiosWithAuth().delete("/colors/123")
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
