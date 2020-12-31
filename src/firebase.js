import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDKdwWd6ZJJE9Y96uRbht2A2VgzE1a1JK8",
    authDomain: "whatsapp-clone-29c54.firebaseapp.com",
    projectId: "whatsapp-clone-29c54",
    storageBucket: "whatsapp-clone-29c54.appspot.com",
    messagingSenderId: "523570919373",
    appId: "1:523570919373:web:cc27f8acb99635e6b1f684",
    measurementId: "G-J9DPZP4BBK"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export default  db;
export {auth,provider};








