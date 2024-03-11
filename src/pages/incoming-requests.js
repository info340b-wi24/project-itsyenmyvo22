import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { getDatabase, ref, set, push, child } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import 'firebase/auth';
import { get } from 'firebase/database';
import AddCard from './add-card';

export default function IncomingRequests (props) {


    return (
        <main className="incoming">
        <h1 className="rqh1">Incoming Requests</h1>
        <div className="rectangle">
            <div id="none-sent" className="none">
            No incoming requests
            </div>
        </div>
        </main>
    //</div>
    );
}