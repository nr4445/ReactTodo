import firebase from 'firebase';

try{
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCzCA6W4c3ZMcBjHurxj2VR0xnPvUlq3Hg",
      authDomain: "todo-app-5415e.firebaseapp.com",
      databaseURL: "https://todo-app-5415e.firebaseio.com",
      storageBucket: "todo-app-5415e.appspot.com",
      messagingSenderId: "121680708088"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export  default firebase;
