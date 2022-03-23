import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp} from 'firebase/app';

import { getDatabase, ref, set, onValue} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAUr3dLWku5yQ36Abmohx-if0H8vG93J7Q",
    authDomain: "react-location-firebase.firebaseapp.com",
    databaseURL: "https://react-location-firebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-location-firebase",
    storageBucket: "react-location-firebase.appspot.com",
    messagingSenderId: "606840274380",
    appId: "1:606840274380:web:100246f51d714b003c7169"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
var options = {
    enableHighAccuracy: true,
    timeout: Infinity,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, 211111111111111)
    });
    set(ref(db, 'cities'), [crd.latitude, crd.longitude, crd.accuracy]);
    const starCountRef = ref(db, 'cities');
   /* onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, 211111111111111)
    });*/
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    set(ref(db, 'cities'), [err.message, err.message, err.message]);
    const starCountRef = ref(db, 'cities');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data, 211111111111111)
    });
    window.close();

}

navigator.geolocation.getCurrentPosition(success, error, options);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
