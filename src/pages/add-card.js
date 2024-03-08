import React, { useState } from "react";
import { Link } from "react-router-dom";
//import firebase from 'firebase/compat/app';
// import {getStorage} from 'firebase/storage';
import Dropdown from 'react-bootstrap/Dropdown';


function Drop() {
    return (
      <Dropdown >
        <Dropdown.Toggle className = "bg-dark" variant="success" id="dropdown-basic">
          Select Member Name
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item>BTS</Dropdown.Item>
          <Dropdown.Item >RM</Dropdown.Item>
          <Dropdown.Item >JIN</Dropdown.Item>
          <Dropdown.Item >SUGA</Dropdown.Item>
          <Dropdown.Item >J-HOPE</Dropdown.Item>
          <Dropdown.Item >JIMIN</Dropdown.Item>
          <Dropdown.Item >V</Dropdown.Item>
          <Dropdown.Item >Jungkook</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

export default function AddCard (props) {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadError, setUploadError] = useState(null);
  
    
    
    // const storage = getStorage();

    //const fileRef = storageRef(storage, "path/to/myfile.png");
  
    // const handleFileChange = (e) => {
    //   setFile(e.target.files[0]);
    // };
  
    // const handleUpload = () => {
    //   if (file) {
    //     setUploading(true);
    //     const uploadTask = storage.ref(`uploads/${file.name}`).put(file);
  
    //     uploadTask.on(
    //       'state_changed',
    //       (snapshot) => {
    //         const progress = Math.round(
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );
    //         setUploadProgress(progress);
    //       },
    //       (error) => {
    //         console.error(error);
    //         setUploadError('Error uploading file.');
    //         setUploading(false);
    //       },
    //       () => {
    //         setUploading(false);
    //         setUploadProgress(100);
    //         setFile(null);
    //       }
    //     );
    //   }
    // };

    return (
        <div className="add-card">
                <p className="request-title">Upload Image</p>
                <Link  aria-label='exit button' className="exit-btn" to='/'>X</Link>
                <div className="inner-add-card">
                    <img className="upload-icon" src="photos/home/upload-icon.png" alt="cloud with an arrow pointing upwards" />
                    {/* <input type="file" className="member-btn trade-btn" multipleonChange={handleFile}>Select File</input> */}
                    <input type="file" />

 
  <Drop />
                    <button aria-label='upload button' className="member-btn trade-btn" disabled={!file || uploading}>Upload</button>
                </div>
        </div>
    )  
}