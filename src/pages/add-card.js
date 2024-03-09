import React, { useState } from "react";
import { Link } from "react-router-dom";
//import firebase from 'firebase/compat/app';
// import {getStorage} from 'firebase/storage';
import Dropdown from 'react-bootstrap/Dropdown';
import { ref, set as firebaseSet, push as firebasePush, onValue, getDatabase, child} from 'firebase/database'
import {getStorage, ref as dbRef, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { child, getDatabase,  push as dbPush, set as firebaseSet, onValue } from 'firebase/database';
// function Drop({onOptionChange}) {
//     const handleOptionSelect = (eventKey) => {
//         onOptionChange(eventKey);
//         //setSelectedOption(eventKey);
//     };

//     return (
//       <Dropdown >
//         <Dropdown.Toggle className = "bg-dark" variant="success" id="dropdown-basic">
//           Select Member Name
//         </Dropdown.Toggle>
  
//         <Dropdown.Menu>
//           <Dropdown.Item eventKey= "BTS">BTS</Dropdown.Item>
//           <Dropdown.Item eventKey= "RM">RM</Dropdown.Item>
//           <Dropdown.Item eventKey= "JIN" >JIN</Dropdown.Item>
//           <Dropdown.Item eventKey= "SUGA">SUGA</Dropdown.Item>
//           <Dropdown.Item eventKey= "J-HOPE">J-HOPE</Dropdown.Item>
//           <Dropdown.Item eventKey= "JIMIN">JIMIN</Dropdown.Item>
//           <Dropdown.Item eventKey= "V" >V</Dropdown.Item>
//           <Dropdown.Item eventKey= "JUNGKOOK">JUNGKOOK</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   }

export default function AddCard (props) {
    
  
    const userId = props.userId;
  const displayName = props.displayName
    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = "photos/home/upload-icon.png";
    const [imageUrl, setImageUrl] = useState(initialURL)
  const[selectedOption, setSelectedOption] = useState("")


    
    //image uploading!
    const handleChange = (event) => {
      if(event && event.target.files.length > 0 && event.target.files[0]) {
        const imageFile = event.target.files[0]
        setImageFile(imageFile);
        setImageUrl(URL.createObjectURL(imageFile));
        console.log("done uploading")
      }
    }
  
    const handleImageUpload = async (event) => {
      const storage = getStorage();
      const db= getDatabase();
        console.log("Uploading", imageFile);
      
      const imageRef = dbRef(storage, userId );
     
        await uploadBytes(imageRef, imageFile);
        console.log("hu");
      const downloadUrlString = await getDownloadURL(imageRef);
      console.log(downloadUrlString);
  
      //put in user profile

      //also put in database (for fun)

      const userDataRef = ref(db, "cardData");
        //const userImgRef = ref(userDataRef, "images")
     
    //   const userRef = child(userDataRef, userId );
      const name = imageFile.name.replace(".", "-");
      console.log(name);
      const imgRef = child(userDataRef, name);
        
    
   
    await firebaseSet(imgRef, {imageUrl: downloadUrlString, userId: userId, member:selectedOption})
    
    console.log("Image uploaded successfully:", downloadUrlString);
    }


    const handleOptionChange = (selected) => {
    setSelectedOption(selected);
    
    }

    const isFormValid = () => {
        return  selectedOption && imageFile; // Check if both file and dropdown are selected
    };


    const handleSubmit = () => {
      
    
       if (isFormValid()) {
            // Submit form
            handleImageUpload();
           
            //handleChange();
           
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
        {/* <button ria-label='upload button' className="member-btn trade-btn"  onClick={handleSubmit}>Upload Card</button> */}
        <Link ria-label='upload button' className="member-btn trade-btn"  onClick={handleSubmit} to="/">Upload Card</Link>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
      </div>
    </div>

    </div>      
             
     
)}
    