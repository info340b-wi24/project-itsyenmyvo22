// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getDatabase } from 'firebase/database';
// import { ref, onValue } from "firebase/database"

// export default function Cards(props){
//     const [selectedMember, setSelectedMember] = useState("BTS");
//     const [cardData, setCardData] = useState([]);

//     useEffect(() => {
//         const database = getDatabase();
//         const cardDataRef = ref(database, 'cardData');

//         const unregisterFunction = onValue(cardDataRef, (snapshot) => {
//             const cardDataVal = snapshot.val();
//             //setCardData(cardDataVal);
          
//                 if(cardData){
//                     let arr = cardData;
//                    // let newArr = cardData.push(cardDataVal);
//                     // console.log(cardData);
//                     console.log(cardDataVal);
//                     //console.log(newArr);
//                     setCardData(cardDataVal);
//                 }
                
            
//         })

//         function cleanup() {
//             unregisterFunction();
//         }
//         return cleanup;
//     }, []);
    
//     const handleMemberClick = (member) => {
//         setSelectedMember(member);
//     };

//     const cardDataArray = Object.values(cardData);
    
//     const memberButtons = Array.from(new Set(cardDataArray.map(card => card.member))).map((member, index) => (
//         <button
//             key={`${member}-${index}`}
//             aria-label="select"
//             className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
//             onClick={() => handleMemberClick(member)}
//         >
//             {member}
//         </button>
//     ));

//     const photoCards = cardDataArray.map(card => (
//         <div
//             key={card.imageUrl}
//             className={`photocard ${selectedMember && selectedMember !== card.member ? 'hidden' : ''}`}
//         >
//             <img src={card.imageUrl} alt={card.member} className="photocard-img" />
//             <div className="photocard-description">
//                 <p>
                    
//                     {card.member}
//                     <Link aria-label="request" to={`/TradeRequest/${card.cardId}`} className="member-btn trade-btn">Request Trade</Link>
//                 </p>
//             </div>
//         </div>
//     ));

//     return (          
//         <div>
//             <div className="member-btn-container">
//                 {memberButtons}
//             </div>

//             <div className="photocard-container">
//                 {photoCards}
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getDatabase } from 'firebase/database';
// import { ref, onValue } from "firebase/database"

// export default function Cards(props){
//     const [selectedMember, setSelectedMember] = useState("BTS");
//     const [cardData, setCardData] = useState([]);

//     useEffect(() => {
//         const database = getDatabase();
//         const cardDataRef = ref(database, 'cardData');

//         const unregisterFunction = onValue(cardDataRef, (snapshot) => {
//             const cardDataVal = snapshot.val();
//             if (cardDataVal) {
//                 const dataArray = Object.values(cardDataVal).map((card, index) => ({ ...card, cardId: index + 1 }));
//                 setCardData(dataArray);
//             }
//         });

//         return () => {
//             unregisterFunction();
//         };
//     }, []);
    
//     const handleMemberClick = (member) => {
//         setSelectedMember(member);
//     };

//     const memberButtons = Array.from(new Set(cardData.map(card => card.member))).map((member, index) => (
//         <button
//             key={`${member}-${index}`}
//             aria-label="select"
//             className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
//             onClick={() => handleMemberClick(member)}
//         >
//             {member}
//         </button>
//     ));

//     const memberCards = cardData.filter(card => card.member === selectedMember).map(card => (
//         <div key={card.cardId} className="photocard">
//             <img src={card.imageUrl} alt={card.member} className="photocard-img" />
//             <div className="photocard-description">
//                 <p>
//                     {card.member}
//                     <Link aria-label="request" to={`/TradeRequest/${card.cardId}`} className="member-btn trade-btn">Request Trade</Link>
//                 </p>
//             </div>
//         </div>
//     ));

//     return (          
//         <div>
//             <div className="member-btn-container">
//                 {memberButtons}
//             </div>

//             <div className="photocard-container">
//                 {memberCards}
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
import { ref, onValue } from "firebase/database"

export default function Cards(props){
    const [selectedMember, setSelectedMember] = useState("BTS");
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const cardDataRef = ref(database, 'cardData');

        const unregisterFunction = onValue(cardDataRef, (snapshot) => {
            const cardDataVal = snapshot.val();
            if (cardDataVal) {
                setCardData(Object.values(cardDataVal));
            }
        });

        return () => {
            unregisterFunction();
        };
    }, []);
    
    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const memberButtons = Array.from(new Set(cardData.map(card => card.member))).map((member, index) => (
        <button
            key={`${member}-${index}`}
            aria-label="select"
            className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
            onClick={() => handleMemberClick(member)}
        >
            {member}
        </button>
    ));

    const memberCards = cardData.filter(card => card.member === selectedMember).map(card => (
        <div key={card.cardId} className="photocard">
            <img src={card.imageUrl} alt={card.member} className="photocard-img" />
            <div className="photocard-description">
                <p>
                    {card.member}
                    <Link aria-label="request" to={`/TradeRequest/${card.cardId}`} className="member-btn trade-btn">Request Trade</Link>
                </p>
            </div>
        </div>
    ));

    return (          
        <div>
            <div className="member-btn-container">
                {memberButtons}
            </div>

            <div className="photocard-container">
                {memberCards}
            </div>
        </div>
    );
}