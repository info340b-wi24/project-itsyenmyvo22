
import links from "../data/links.json";
import React, { useState } from 'react';

export default function Cards(props){
    const [selectedMember, setSelectedMember] = useState("BTS");
    const [showTradeRequest, setShowTradeRequest] = useState(false);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setShowTradeRequest(false);
    };

    const handleRequestTradeClick = () => {
        setShowTradeRequest(true);
    };

    const handleDeclineClick = () => {
        setShowTradeRequest(false);
    };

    return (    
        <div>
            {!showTradeRequest && (
                <div>
                    <div className="member-btn-container">
                        {Array.from(new Set(links.map(link => link.member))).map(member => (
                            <button key={member} className={`member-btn ${selectedMember === member ? 'selected' : ''}`} onClick={() => handleMemberClick(member)}>
                                {member}
                            </button>
                        ))}
                    </div>

                    <div className="photocard-container">
                        {links.map(link => (
                            <div key={link.card} className={`photocard ${selectedMember && selectedMember !== link.member ? 'hidden' : ''}`}>
                                <img src={link.img} alt={`${link.member} gathering in a group`} className="photocard-img" />
                                <div className="photocard-description">
                                    <p>
                                        {link.member}
                                        <button className="member-btn trade-btn" onClick={handleRequestTradeClick}> Request Trade</button>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showTradeRequest && (
                <div className="trade-request">
                    <p className="request-title">Request Trade</p>
                    <p>Are you sure you want to send a request to trade this card?</p>
                    <a className="member-btn" href="accept.html">Accept</a>
                    <button className="member-btn" onClick={handleDeclineClick}>Decline</button>
                </div>
            )}
        </div>      
    );
}