import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref as dRef, child, set, onValue, off} from 'firebase/database';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export default function MyCards () {
    const [url, setUrl] = useState('');
    
    
    // const storage = getStorage();
    // const imgRef = ref(storage, 'cardData/imageUrl');

    // useEffect(() => {
    //     const fetchUrl = async () => {
    //         try {
    //             const url = await getDownloadURL(imgRef);
    //             setImageUrl(url);
    //         } catch (error) {
    //             console.error('Error fetching image:', error.message);
    //         }
    //     };

    //     fetchUrl();
    //     }
    // )

    const db = getDatabase();
    const imgRef = dRef(db, 'cardData/imageUrl');

    useEffect(() => {
        const fetchUrl = () => {
            onValue(imgRef, (snapshot) => {
                const data = snapshot.val();
                if (data && data.imageUrl) {
                    setUrl(data.imageUrl);
                } else {
                    console.log('Image URL not found');
                }
            });
        };

        fetchUrl();

        return () => {
            setUrl(null);
        };
    }, []);

    


    // useEffect(() => {
    //     const fetchUrl = () => {
    //         onValue(imgRef, (snapshot) => {
    //             const data = snapshot.val();
    //             if (data) {
    //                 setImageUrl(data);
    //             } else {
    //                 setImageUrl('');
    //             }
    //         })
    //     }

    //     fetchUrl();

    //     return () => {
    //         off(imgRef, 'value', fetchUrl);
    //     };
    // }, [imgRef]);
        // imgRef.on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     if (data) {
        //         setImageURL(data);
        //     } else {
        //         setImageURL('');
        //     }
        // });

        // return () => {
        //     imgRef.off('value');
        // };
    

    // if(imageUrl !== ''){
          
    //     const dbImg = getDatabase();
    //     const imgUrlRef = ref(dbImg, "userImages");
    //     const imageR = child(imgUrlRef, imageUrl);
       
    //     firebaseSet(imageR, {userId: userId, email: email, userName:userName, image: "image" })
    //     }
    //const imgArray = Object.values(imageUrl);

    return (
        <div>
            {url ? (
                        <div className="card">
                        <img src={url} alt={url.member} className="card-body-img" />
                        </div>
                ) : (
                    <div className="card">
                    <div className="card-body">
                    <Link aria-label='add card' to='/add-card' className="card-link">Add card</Link>
                    </div>
                    </div>
            )}
        </div>
    )

    // if (imgArray.length > 0) {
    //     return(
    //         imgArray.map(card => (
    //         <div
    //             key={card.imageUrl}
    //             className={`card ${selectedMember && selectedMember !== card.member ? 'hidden' : ''}`}
    //         >
    //             <img src={card.imageUrl} alt={card.member} className="card-body" />
    //         </div>
    //         ))
    //     );
    // } else {
    //     return (
    //         <div className="card">
    //             <div className="card-body">
    //             <Link aria-label='add card' to='/add-card' className="card-link">Add card</Link>
    //                 {/* <img src='C:\Users\steph\OneDrive\Desktop\joon.jpg' /> */}
    //                {/* <CardRender img src /> */}
    //             </div>
    //             </div>
    //     );
    // }

    

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
    //                 console.error('Error fetching image data:', error);
    //             }
    
    //             const loadImages = async () => {
    //                 const urls = await fetchData();
    //                 setImageUrl(urls);
    //             };

    // }

};
