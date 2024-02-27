import { Link } from 'react-router-dom';

export default function TradeRequest(props) {
    return (
    <div className="trade-request">
        <p className="request-title">Request Trade</p>
        <p>Are you sure you want to send a request to trade this card?</p>
        {/* <a className="member-btn" href="accept.html">Accept</a> */}
        <Link to='/Accept' className="member-btn">Accept</Link>
        {/* <a className="member-btn" href="card-trading.html">Decline</a> */}
        <Link to='/Cards' className="member-btn">Decline</Link>
    </div>
    )
}