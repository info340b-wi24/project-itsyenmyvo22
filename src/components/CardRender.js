// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import { getDatabase, ref as sRef, child, get, onValue } from 'firebase/database';
// import AddCard from '../pages/add-card';
// import { Link, useRevalidator } from 'react-router-dom';

// const CardRender = () => {
//     const [imageUrl, setImageUrl] = useState('');

//     useEffect(() => {
//         const fetchImageUrl = async () => {
//         try {
//             const storageRef = firebase.storage().ref();
//             const imageRef = storageRef.child('imageUrl');
//             const url = await imageRef.getDownloadURL();
//             setImageUrl(url);
//         } catch (error) {
//             console.error('Error fetching image URL:', error);
//         }
//         };
//         fetchImageUrl();
//     }, []);


//     return (
//             <div className="container">
//             <div className="rectangle-home">
//                 <div className="card">
//                 <div className="card-body">
//                     <img src={imageUrl} alt='Uploaded Photocard' />
//                 </div>
//                 </div>
//             </div>
//             </div>
//     );
// //     const db = getDatabase();
// //     const imgRef = sRef(db, "downloadUrlString");


// //    const [imageUrl, setImageUrl] = useState('');

// //     useEffect(() => {
// //     //    const db = getDatabase();
// //    //    const userDataRef = sRef(db, 'userId/imageUrl');
// //     //    console.log(userDataRef);
// //     //     console.log(`${downloadUrlString}`)

// //         // onValue(userDataRef, (snapshot) => {
// //         //     const imgVal = snapshot.val();
// //         //     setImageUrl(imgVal);
// //         //     console.log(imageUrl);
// //         // })

// //         // if (imageUrl === null) {
// //         //     return <Link aria-label='add card' to='/add-card' className="card-link">Add card</Link>
// //         // } else {
// //         //     return <img src={imageUrl} />
// //         // }

        

// //         const fetchData = async () => {
// //             try {
// //                 const snapshot = await get(child(imgRef, imageUrl));
// //                 if (snapshot.exists()) {
// //                     const imageData = snapshot.val();
// //                     //let result = setImageUrl(userDataRef.url);
// //                     //let result = setImageUrl(URL.createObjectURL(fetchData(file)))
// //                     let imgPromises = result.items.map(imageRef => imageRef.getDownloadURL());
// //                     return Promise.all(imgPromises);
// //                 }
// //                 //if(file.target.files.length > 0) {
// //                     //let result = setImageUrl(URL.createObjectURL(fetchData(file)))
// //                     // let result = await sRef(userDataRef, userId).listAll();
// //                     // let imgPromises = result.items.map(imageRef => imageRef.getDownloadURL());
// //                     // return Promise.all(imgPromises);
// //                   //}

// //             } catch (error) {
// //                 console.error('Error fetching image data:', error);
// //             }
// //             // let result = 'C:/Users/steph/OneDrive/Desktop/joon.jpg'
            
// //         };

// //         const loadImages = async () => {
// //             const urls = await fetchData();
// //             setImageUrl(urls);
// //         };

// //         loadImages();
// //     }, [downloadUrlString]);

//     // let imageRender = <img src='C:\Users\steph\OneDrive\Desktop\joon.jpg' />
//     // return (
//     //     <div>
//     //         {/* <img src='C:\Users\steph\OneDrive\Desktop\joon.jpg' /> */}
//     //        {imageRender}
//     //     </div>
//     // );
// };

// export default CardRender;

    