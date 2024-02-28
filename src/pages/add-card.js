import React from "react";

export default function AddCard (props) {
    return (
        <div className="add-card">
            <p className="request-title">Upload Image</p>
            <a className="exit-btn" href="index.html">X</a>
            <div className="inner-add-card">
                <img className="upload-icon" src="photos/home/upload-icon.png" alt="cloud with an arrow pointing upwards" />
                <a className="member-btn trade-btn" href="index.html">Select File</a>
            </div>
            <a className="member-btn trade-btn" href="index.html">Upload</a>
        </div>
    )  
}