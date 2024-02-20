//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB0Sw76jzDiRc3SlvC-2isQ67WPDvBdPG4",
    authDomain: "comp1800-202410-demo-cb84f.firebaseapp.com",
    projectId: "comp1800-202410-demo-cb84f",
    storageBucket: "comp1800-202410-demo-cb84f.appspot.com",
    messagingSenderId: "839127438086",
    appId: "1:839127438086:web:b7d37ee5ee4882b14fc487"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
