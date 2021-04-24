import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAS03wZAv2n1ul68mjaFPgsDwfzeeLFVlE",
    authDomain: "disney-clone-884cc.firebaseapp.com",
    projectId: "disney-clone-884cc",
    storageBucket: "disney-clone-884cc.appspot.com",
    messagingSenderId: "486362871994",
    appId: "1:486362871994:web:ec8c5023a1cfedfe5d6a83",
    measurementId: "G-K2WVZQ3WGP"
  };


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;