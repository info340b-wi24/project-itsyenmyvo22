
import links from "../data/links.json";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props){
    const [selectedMember, setSelectedMember] = useState("BTS");
    //const [showTradeRequest, setShowTradeRequest] = useState(false);
    //const [showAccept, setShowAccept] = useState(false);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        //setShowTradeRequest(false);
        //setShowAccept(false);
    };

    // const handleRequestTradeClick = () => {
    //     setShowTradeRequest(true);
    // };

    // const handleDeclineClick = () => {
    //     setShowTradeRequest(false);
    //     setShowAccept(false);
    // };

    // const handleAcceptClick = () => {
    //     setShowTradeRequest(true);
    //     setShowAccept(true);
    // }

    return (    
        <div>
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
                                        {/* <button className="member-btn trade-btn" href="trade-request.html"> Request Trade</button> */}
                                        <Link to='/TradeRequest' className="member-btn trade-btn">Request Trade</Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            {/* {showTradeRequest && (
                <div className="trade-request">
                    <p className="request-title">Request Trade</p>
                    <p>Are you sure you want to send a request to trade this card?</p>
                    <button className="member-btn" onClick={handleAcceptClick}>Accept</button>
                    <button className="member-btn" onClick={handleDeclineClick}>Decline</button>
                </div>
            )} */}

            {/* {showAccept && (
                <div className="trade-request">
                    <p className="request-title">Request Sent!</p>
                    <p>Your request has been sent to the owner of the card. Their contact will be revealed to you in your <a href="sent-requests.html">Sent Trade Request Inbox</a> if they accept!</p>
                    <a className="member-btn" href="card-trading.html">Return to Card Trading</a>
                </div>
            )} */}
        </div>   
        
        // return (    
        //     <div>
        //         {!showTradeRequest && (
        //             <div>
        //                 <div className="member-btn-container">
        //                     {Array.from(new Set(links.map(link => link.member))).map(member => (
        //                         <button key={member} className={`member-btn ${selectedMember === member ? 'selected' : ''}`} onClick={() => handleMemberClick(member)}>
        //                             {member}
        //                         </button>
        //                     ))}
        //                 </div>
    
        //                 <div className="photocard-container">
        //                     {links.map(link => (
        //                         <div key={link.card} className={`photocard ${selectedMember && selectedMember !== link.member ? 'hidden' : ''}`}>
        //                             <img src={link.img} alt={`${link.member} gathering in a group`} className="photocard-img" />
        //                             <div className="photocard-description">
        //                                 <p>
        //                                     {link.member}
        //                                     <button className="member-btn trade-btn" onClick={handleRequestTradeClick}> Request Trade</button>
        //                                 </p>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         )}
    
        //         {/* {showTradeRequest && (
        //             <div className="trade-request">
        //                 <p className="request-title">Request Trade</p>
        //                 <p>Are you sure you want to send a request to trade this card?</p>
        //                 <button className="member-btn" onClick={handleAcceptClick}>Accept</button>
        //                 <button className="member-btn" onClick={handleDeclineClick}>Decline</button>
        //             </div>
        //         )} */}
    
        //         {/* {showAccept && (
        //             <div className="trade-request">
        //                 <p className="request-title">Request Sent!</p>
        //                 <p>Your request has been sent to the owner of the card. Their contact will be revealed to you in your <a href="sent-requests.html">Sent Trade Request Inbox</a> if they accept!</p>
        //                 <a className="member-btn" href="card-trading.html">Return to Card Trading</a>
        //             </div>
        //         )} */}
        //     </div>      
    );
}