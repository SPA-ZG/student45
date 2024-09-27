import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQob4JtJfV89UFiHKYWkp8zL0dNro7WeA",
    authDomain: "web2lab6-4ddd3.firebaseapp.com",
    projectId: "web2lab6-4ddd3",
    storageBucket: "web2lab6-4ddd3.appspot.com",
    messagingSenderId: "179364093255",
    appId: "1:179364093255:web:f7a9005cbb08fe89320062",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
