import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
//import CardRender from '../components/CardRender';
//import firebase from 'firebase/app';
import { getDatabase, ref , child, get, onValue } from 'firebase/database';

export default function MyCards (props) {
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
<img src={card} alt={card.member} className="card-body-img" />
    )
}