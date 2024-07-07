// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();
console.log(env);

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCYCE-0xsE43lsHMwfxyinCenqMya-wcK0',
// 	authDomain: 'react-cursos-c0414.firebaseapp.com',
// 	projectId: 'react-cursos-c0414',
// 	storageBucket: 'react-cursos-c0414.appspot.com',
// 	messagingSenderId: '950522999214',
// 	appId: '1:950522999214:web:b067cbbe208bd9c624583f',
// };

//Testing
const firebaseConfig = {
	apiKey: 'AIzaSyCgJKUhgWocH3B9w-YFQ2LAfRD5LJal0DM',
	authDomain: 'react-cursos-test-49d30.firebaseapp.com',
	projectId: 'react-cursos-test-49d30',
	storageBucket: 'react-cursos-test-49d30.appspot.com',
	messagingSenderId: '823907550934',
	appId: '1:823907550934:web:45ab7b57e4ce7b6b5c2b77',
	measurementId: 'G-T1MC13SBED',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
