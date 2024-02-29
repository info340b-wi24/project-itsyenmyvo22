import React from "react";
import { Link } from "react-router-dom";

export default function AddCard (props) {
    return (
        <div className="add-card">
            <p className="request-title">Upload Image</p>
            <Link className="exit-btn" to='/'>X</Link>
            <div className="inner-add-card">
                <img className="upload-icon" src="photos/home/upload-icon.png" alt="cloud with an arrow pointing upwards" />
                <Link className="member-btn trade-btn" to='/add-card'>Select File</Link>
            </div>
            <Link className="member-btn trade-btn" to='/add-card'>Upload</Link>
        </div>
    )  
}