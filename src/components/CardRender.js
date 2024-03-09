import React, { useState, useEffect } from 'react';
import { getDatabase, ref as storageRef, child, get } from 'firebase/database';


// const CardRender = ({userId}) => {
//     const [imageUrl, setImageUrl] = useState("photos/home/upload-icon.png");

//     useEffect(() => {
//         const db = getDatabase();
//         const userDataRef = storageRef(db, 'cardData');

//         const fetchData = async () => {
//             // try {
//             //     const snapshot = await get(child(userDataRef, userId));
//             //     if (snapshot.exists()) {
//             //         const imageData = snapshot.val();
//             //         setImageUrl(imageData.imageUrl);
//             //     }
//             // } catch (error) {
//             //     console.error('Error fetching image data:', error);
//             // }
//             let result = await storageRef(userDataRef,userId).listAll();
//             let imgPromises = result.items.map(imageRef => imageRef.getDownloadURL());
//             return Promise.all(imgPromises);
//         };

//         const loadImages = async () => {
//             const urls = await fetchData();
//             setImageUrl(urls);
//         }
// ;
//         loadImages();
//     }, [userId]);

//     return (
//         <div>
//             <img src={imageUrl} alt="Uploaded photocard" style={{ maxWidth: '100%'}}/>
//         </div>
//     );
// };

// export default CardRender;

    