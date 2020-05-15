
  // Initialize Firebase
import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAJ1lO5BULAkGmH18FWQ1Nw9Url2aBwvZs",
    authDomain: "mgworkout-f95ea.firebaseapp.com",
    databaseURL: "https://mgworkout-f95ea.firebaseio.com",
    projectId: "mgworkout-f95ea",
    storageBucket: "mgworkout-f95ea.appspot.com",
    messagingSenderId: "964043201382",
    appId: "1:964043201382:web:1abb56ff3fe17867a306a7",
    measurementId: "G-VCFN70ZVZY"
  };

let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
let signupsRef = db.ref('signups');

export default signupsRef;