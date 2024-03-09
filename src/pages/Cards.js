import links from "../data/links.json";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
//import { ref, set as firebaseSet, child, push as firebasePush, onValue} from 'firebase/database'
import { ref, onValue } from "firebase/database"

export default function Cards(props){
    const [selectedMember, setSelectedMember] = useState("BTS");
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const cardDataRef = ref(database, 'cardData');

        const unregisterFunction = onValue(cardDataRef, (snapshot) => {
            const cardDataVal = snapshot.val();
            console.log(cardDataVal);
            setCardData(cardDataVal);
        })

        function cleanup() {
            unregisterFunction();
        }
        return cleanup;
    }, []);
    
    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const memberButtons = Array.from(new Set(cardData.map(card => card.member))).map(member => (
        <button
            key={member}
            aria-label="select"
            className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
            onClick={() => handleMemberClick(member)}
        >
            {member}
        </button>
    ));

    // const memberButtons = Array.from(new Set(links.map(link => link.member))).map(member => (
    //     <button
    //         key={member}
    //         aria-label="select"
    //         className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
    //         onClick={() => handleMemberClick(member)}
    //     >
    //         {member}
    //     </button>
    // ));

    const cardDataArray = Object.values(cardData);
    console.log(cardDataArray);

    const photoCards = cardDataArray.map(card => (
        <div
            key={card.cardId}
            className={`photocard ${selectedMember && selectedMember !== card.member ? 'hidden' : ''}`}
        >
            <img src={card.img} alt={`${card.member} gathering in a group`} className="photocard-img" />
            <div className="photocard-description">
                <p>
                    {card.member}
                    <Link aria-label="request" to={`/TradeRequest/${card.cardId}`} className="member-btn trade-btn">Request Trade</Link>
                </p>
            </div>
        </div>
    ));

    // const photoCards = links.map(link => (
    //     <div
    //         key={link.card}
    //         className={`photocard ${selectedMember && selectedMember !== link.member ? 'hidden' : ''}`}
    //     >
    //         <img src={link.img} alt={`${link.member} gathering in a group`} className="photocard-img" />
    //         <div className="photocard-description">
    //             <p>
    //                 {link.member}
    //                 <Link aria-label="request" to='/TradeRequest' className="member-btn trade-btn">Request Trade</Link>
    //             </p>
    //         </div>
    //     </div>
    // ));

    return (          
        <div>
            <div className="member-btn-container">
                {memberButtons}
            </div>

            <div className="photocard-container">
                {photoCards}
            </div>
        </div>
    );
}