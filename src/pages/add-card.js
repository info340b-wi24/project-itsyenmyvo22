import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { ref, set as firebaseSet, getDatabase, child} from 'firebase/database'
import {getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
//import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { ref as storageRef } from 'firebase/storage';

export default function AddCard (props) { 
  const userId = props.userId;
  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = "photos/home/upload-icon.png";
  const [imageUrl, setImageUrl] = useState(initialURL)
  const[selectedOption, setSelectedOption] = useState("")

  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const chosenFile = event.target.files[0];
      setImageFile(chosenFile);
      setImageUrl(URL.createObjectURL(chosenFile))
    }
  }

  async function handleImageUpload() {
    const storage = getStorage();
    const db= getDatabase();
    const fileRef = storageRef(storage, imageFile.name);
    console.log(fileRef);

    try { 
      await uploadBytes(fileRef, imageFile) 
    } catch (err) {
      console.log(err);
    }

    const downloadUrlString = await getDownloadURL(fileRef);
    const userDataRef = ref(db, "cardData");   
    const name = imageFile.name.replace(/-|\./g, "_");
    console.log(name);
    const imgRef = child(userDataRef, name);
   
    await firebaseSet(imgRef, {imageUrl: downloadUrlString, userId: userId, title: name, member:selectedOption})
    
    console.log("Image uploaded successfully:", downloadUrlString);
  }

  const handleOptionChange = (selected) => {
    setSelectedOption(selected); 
  }

  const isFormValid = () => {
    return  selectedOption && imageFile; 
  };


  const handleSubmit = () => {
    if (isFormValid()) {
      handleImageUpload();
           
    } else {
        console.log("invalid")
        alert("Please select a member name and upload an image.");
      }
  };
    
  return (
  <div className="add-card">
           
  <div className="container">
  
  <p className="request-title">Upload Image</p>
  <Link  aria-label='exit button' className="exit-btn" to='/'>X</Link><div className="mb-5 image-upload-form">
  <div className="inner-add-card">
        <img src={imageUrl} alt="user avatar preview" className=" mt-2 mb-2 imageUpload"/>
        <Dropdown >
        <Dropdown.Toggle className = "bg-dark" variant="success" id="dropdown-basic">
        {selectedOption || "Select Member Name"}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item  onClick= {() => handleOptionChange("BTS")}>BTS</Dropdown.Item>
          <Dropdown.Item onClick= {() => handleOptionChange("RM")}>RM</Dropdown.Item>
          <Dropdown.Item onClick= {() => handleOptionChange("JIN")} >JIN</Dropdown.Item>
          <Dropdown.Item onClick= {() => handleOptionChange("MYG")}>MYG</Dropdown.Item>
          <Dropdown.Item onClick= {() => handleOptionChange("JHS")}>JHS</Dropdown.Item>
          <Dropdown.Item onClick= {() =>handleOptionChange("PJM")}>PJM</Dropdown.Item>
          <Dropdown.Item onClick= {() =>handleOptionChange("V")}>V</Dropdown.Item>
          <Dropdown.Item onClick= {() =>handleOptionChange("JK")}>JK</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <label htmlFor="imageUploadInput" className="member-btn trade-btn">Choose Image</label>
        <Link ria-label='upload button' className="member-btn trade-btn"  onClick={handleSubmit} to="/">Upload Card</Link>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
      </div>
    </div>

    </div>      
             
     
)}
    