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
  
    const [imageFile, setImageFile] = useState(undefined)
    let initialURL = props.currentUser;
    const [imageUrl, setImageUrl] = useState(initialURL)
  const[selectedOption, setSelectedOption] = useState("")



    
    //image uploading!
    const handleChange = (event) => {
      if(event.target.files.length > 0 && event.target.files[0]) {
        const imageFile = event.target.files[0]
        setImageFile(imageFile);
        setImageUrl(URL.createObjectURL(imageFile));
        console.log("done uploading")
      }
    }
  
    const handleImageUpload = async (event) => {
      console.log("Uploading", imageFile);
      
      const storageRef = dbRef(storage);
      const imageRef = ref(storageRef, userId+".png");
     
      try{
        await uploadBytes(imageRef, imageFile)
      const downloadUrlString = await getDownloadURL(imageRef);
      console.log(downloadUrlString);
  
      //put in user profile
    //   await updateProfile(currentUser, { photoURL: downloadUrlString} );
  
      //also put in database (for fun)
      const db = getDatabase();
      const userDataRef = dbRef(db, "userData");
      const userRef = child(userDataRef, userId)
    //   const refString = "userData/"+userId+"/imgUrl";
    //   console.log(refString);
    //   const userImgRef = dbRef(db, "userData/"+userId+"/imgUrl")
    firebaseSet(userRef, {imageUrl: downloadUrlString})
    //   await firebaseSet(userImgRef, downloadUrlString);
    console.log("Image uploaded successfully:", downloadUrlString);
    } catch (error) {
        console.error("Error uploading image:", error);
    }
}

    // const handleOptionChange = (selected) => {
    //     setSelectedOption(selected);
    // };

    // const isFormValid = () => {
    //     return imageFile && selectedOption; // Check if both file and dropdown are selected
    // };


    const handleSubmit = () => {
        handleImageUpload();
        // if (isFormValid()) {
        //     // Submit form
        //     handleImageUpload();
        // } else {
        //     console.log("invalid")
        //     alert("Please select a member name and upload an image.");
        // }
    };
    return (
        <div className="add-card">
                <p className="request-title">Upload Image</p>
                <Link  aria-label='exit button' className="exit-btn" to='/'>X</Link>
                <div className="inner-add-card">
                    <img className="upload-icon" src="photos/home/upload-icon.png" alt="cloud with an arrow pointing upwards" />
                    
                    {/* <Drop  onOptionChange={setSelectedOption}/> */}

                    <input type="file" onChange={handleChange}/>
                  
                    <button aria-label='upload button' className="member-btn trade-btn" onClick={handleSubmit} >Upload</button>
                
                
                </div>
        </div>
    )  
}