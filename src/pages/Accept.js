import { Link } from 'react-router-dom';

export function Accept(props) {
    return (
    <div className="trade-request">
        <p className="request-title">Request Sent!</p>
        <p>Your request has been sent to the owner of the card. Their contact will be revealed to you in your Sent Trade Request Inbox if they accept!</p>
        <Link to='/Cards' className="member-btn">Return to Card Trading</Link>
    </div>
    )
}
