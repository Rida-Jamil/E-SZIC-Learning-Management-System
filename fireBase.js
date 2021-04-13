var app_fireBase = {};

(function () {
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBfh4TtrNk47AI4EDQzuP7APGhXfjFS7vw",
    authDomain: "szic-lms.firebaseapp.com",
    databaseURL: "https://szic-lms-default-rtdb.firebaseio.com",
    projectId: "szic-lms",
    storageBucket: "szic-lms.appspot.com",
    messagingSenderId: "656647531",
    appId: "1:656647531:web:fee30eadaf1da5f3c2982e",
    measurementId: "G-F64E66GL54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;
})()