import links from "../data/links.json";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props){
    const [selectedMember, setSelectedMember] = useState("BTS");

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const memberButtons = Array.from(new Set(links.map(link => link.member))).map(member => (
        <button
            key={member}
            aria-label="select"
            className={`member-btn ${selectedMember === member ? 'selected' : ''}`}
            onClick={() => handleMemberClick(member)}
        >
            {member}
        </button>
    ));

    const photoCards = links.map(link => (
        <div
            key={link.card}
            className={`photocard ${selectedMember && selectedMember !== link.member ? 'hidden' : ''}`}
        >
            <img src={link.img} alt={`${link.member} gathering in a group`} className="photocard-img" />
            <div className="photocard-description">
                <p>
                    {link.member}
                    <Link aria-label="request" to='/TradeRequest' className="member-btn trade-btn">Request Trade</Link>
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
                {photoCards}
            </div>
        </div>
    );
}