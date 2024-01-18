// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCYCE-0xsE43lsHMwfxyinCenqMya-wcK0',
	authDomain: 'react-cursos-c0414.firebaseapp.com',
	projectId: 'react-cursos-c0414',
	storageBucket: 'react-cursos-c0414.appspot.com',
	messagingSenderId: '950522999214',
	appId: '1:950522999214:web:b067cbbe208bd9c624583f',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
