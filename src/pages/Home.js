import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
//import CardRender from '../components/CardRender';
//import firebase from 'firebase/app';
import { getDatabase, ref , child, get, onValue } from 'firebase/database';
//import MyCards from '../components/MyCards';

export default function Home(props) {
    const uid = props.uid
    const [url, setUrl] = useState('');

  
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
    console.log(cardData);

    const urls = cardData.filter(card => card.userId === uid).map(card => (
       card.imageUrl
    ));
const cards = urls.map((card)=>
<div className="img-card">
<img src={card} alt={card.member} className="card-body-img" />
</div>  
    )


    return (
    <div>
        <h1>Home</h1>
        <div className="container mobile-buttons" id="mobile-buttons">
        <div className="d-grid gap-2 col-6 mx-auto d-block d-md-none d-lg-none d-xl-none">
            <Link aria-label='sent requests page' className="btn btn-light" to="/sent-requests" role="button">Sent Trade Request</Link>
            <Link aria-label='incoming requests page' className="btn btn-light" to="/incoming-requests" role="button">Incoming Trade Request</Link>
            {/* <a className="btn btn-light" href="#" role="button">Message Inbox</a> */}
        </div>
        </div>

        <div className="row g-0 mx-0" id="desktop">
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/purple-clouds.png" alt="background for sent requests button" />
                <Link aria-label='sent requests page' to="/sent-requests" className="btn-sent" id="sent">Sent Trade Request</Link>
            </div>
            </div>
            <div className="col">
            <div className="container-fluid">
                <img src="photos/home/army-ocean.png" alt="background for incoming requests button" />
                <Link aria-label='incoming requests page' to="/incoming-requests" className="btn-incoming" id="incoming">Incoming Trade Request</Link>
            </div>
            </div>
        </div>

     
        <h2 className="cardh">My Cards</h2>
        <div className="card ">
            {/* <div className="container"> */}
            
            {/* {url ? (
                        <div className="card">
                        <img src={cardData.url} alt={url.member} className="card-body-img" />
                        </div>
                ) : (
                  
            )} */}
           
         <section>
            <div className= "row">
            <div className = "col-sm-4 col-lg-4">
                    <div className="card-body">
                   
                    
                    <Link aria-label='add card' to='/add-card' className="card-link">
                    
                    <img src="photos/calendar/event_plus.png" alt="plus icon" className = "add row" ></img>
                   
                    Add card</Link>
                    </div>
                    </div>
                    
                 
                    {cards}
                
            </div>
      
                   


            </section>
         
            </div>  
    
         
    </div> 
    );
};