import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import { getDatabase, ref, child, set} from 'firebase/database';
import CardRender from './CardRender';

// const MyCards = (props) => {
//     const userId = props.userId;
//     const [imageFile, setImageFile] = useState(undefined);
//     const [selectedOption, setSelectedOption] = useState('');


// }


