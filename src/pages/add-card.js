import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddCard (props) {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
    }

    function handleMultipleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFiles';
        const formData = new FormData();
        files.forEach((file, index) => {
        formData.append(`file${index}`, file);
        });

        const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
        };

        axios.post(url, formData, config)
        .then((response) => {
            console.log(response.data);
            setUploadedFiles(response.data.files);
        })
        .catch((error) => {
            console.error("Error uploading files: ", error);
        });
    }

    return (
        <div className="add-card">
            <form onSubmit={handleMultipleSubmit}>
                <p className="request-title">Upload Image</p>
                <Link className="exit-btn" to='/'>X</Link>
                <div className="inner-add-card">
                    <img className="upload-icon" src="photos/home/upload-icon.png" alt="cloud with an arrow pointing upwards" />
                    <input type="file" className="member-btn trade-btn" onChange={handleMultipleChange}>Select File</input>
                </div>
                <Link className="member-btn trade-btn" to='/add-card'>Upload</Link>
            </form>
        </div>
    )  
}