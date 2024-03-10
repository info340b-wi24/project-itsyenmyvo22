import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
//import CardRender from '../components/CardRender';
//import firebase from 'firebase/app';
import { getDatabase, ref as sRef, child, get, onValue } from 'firebase/database';
import MyCards from '../components/MyCards';

export default function Home(props) {
    
    // const [imageUrl, setImageUrl] = useState('');
    // const db = getDatabase();
    // const imgRef = sRef(db, "downloadUrlString");

    // const fetchData = async () => {
    //     try {
    //         const snapshot = await get(child(imgRef, imageUrl));
    //         if (snapshot.exists()) {
    //             const imageData = snapshot.val();
    //             //let result = setImageUrl(userDataRef.url);
    //             //let result = setImageUrl(URL.createObjectURL(fetchData(file)))
    //             let imgPromises = result.items.map(imageRef => imageRef.getDownloadURL());
    //             return Promise.all(imgPromises);
    //             }
    //             if(file.target.files.length > 0) {
    //             //let result = setImageUrl(URL.createObjectURL(fetchData(file)))
    //             let result = await sRef(userDataRef, userId).listAll();
    //             let imgPromises = result.items.map(imageRef => imageRef.getDownloadURL());
    //             return Promise.all(imgPromises);
    //             }
        
    //             } catch (error) {
    //                     console.error('Error fetching image data:', error);
    //         }

    //         const loadImages = async () => {
    //             const urls = await fetchData();
    //             setImageUrl(urls);
    //         };


    return (
    <div>
        <h1>Home</h1>
        <div className="container mobile-buttons" id="mobile-buttons">
        <div className="d-grid gap-2 col-6 mx-auto d-block d-md-none d-lg-none d-xl-none">
            <Link aria-label='sent requests page' className="btn btn-light" to="/sent-requests" role="button">Sent Trade Request</Link>
            <Link aria-label='incoming requests page' className="btn btn-light" to="/incoming-requests" role="button">Incoming Trade Request</Link>
            {/* <a className="btn btn-light" href="#" role="button">Message Inbox</a> */}
        </div>
        </div>

        <div className="row g-0 mx-0" id="desktop">
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/purple-clouds.png" alt="background for sent requests button" />
                <Link aria-label='sent requests page' to="/sent-requests" className="btn-sent" id="sent">Sent Trade Request</Link>
            </div>
            </div>
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/army-ocean.png" alt="background for incoming requests button" />
                <Link aria-label='incoming requests page' to="/incoming-requests" className="btn-incoming" id="incoming">Incoming Trade Request</Link>
            </div>
            </div>
        </div>

        <section id="my-cards">
        <h2 className="cardh">My Cards</h2>
            <div className="container">
            <div className="rectangle-home">
                <MyCards />
            </div>
            </div>
            
        </section>
    </div> 
    );
};