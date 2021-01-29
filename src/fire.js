import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyAbE1VzM-vZmGiDzwdFC8zGIaZbV_MIu90",
    authDomain: "news-viewer-a46de.firebaseapp.com",
    projectId: "news-viewer-a46de",
    storageBucket: "news-viewer-a46de.appspot.com",
    messagingSenderId: "773899586973",
    appId: "1:773899586973:web:8d510ae796849c0bb5b374",
    measurementId: "G-HDPDKKBMZS",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
