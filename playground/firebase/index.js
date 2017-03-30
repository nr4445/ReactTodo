import firebase from 'firebase';

// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCzCA6W4c3ZMcBjHurxj2VR0xnPvUlq3Hg",
//     authDomain: "todo-app-5415e.firebaseapp.com",
//     databaseURL: "https://todo-app-5415e.firebaseio.com",
//     storageBucket: "todo-app-5415e.appspot.com",
//     messagingSenderId: "121680708088"
//   };
//   firebase.initializeApp(config);
//
//   var firebaseRef = firebase.database().ref();
  //to get reference call database().ref()
  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user:{
      name: 'Naresh',
      age: 26
    }
  });
var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo1'
});

todosRef.push({
  text: 'Todo2'
});

  // var notesRef = firebaseRef.child('notes');
  //
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key,snapshot.val());
  // });
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key,snapshot.val());
  // });
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key,snapshot.val());
  // });
  //
  // var newNoteRef = notesRef.push({
  //   text: 'Walk the pig'
  // });
  //
  // console.log('Todo id',newNoteRef.key);

  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name': 'Todo Application'
  // });
  //
  // firebaseRef.child('app').update({
  //   name: 'Todo Application'
  // }).then(() => {
  //   console.log('update worked')
  // }, (e) => {
  //   console.log('Update failed');
  // });

// //using multipath update
// firebaseRef.update({
//   'app/name': 'Todo App',
//   'user/name': 'pallothu'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
// firebaseRef.child('user').update({ name: 'Pallothu'});

//firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '1.0',
//   name: null
// });
// firebaseRef.update({
//   isRunning: null
// });
//
// // firebaseRef.child('user').update({
// //   age: null
// // });
//
// furebaseRef.child('user/age').remove();

// /*
// * fetching firebase database
// */
// //tells the firebase to fetch the data avilable at that reference
// firebaseRef.child('app').once('value').then((snapshot) => {//we are going to get back 'snapshot', we can get the keys and values
//   console.log('Got entire database',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData );
//
// firebaseRef.off();// wiht our param will wipe off all listeners
//
// firebaseRef.update({isRunning: false});
// firebaseRef.update({'user/name': 'pallothu'});

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.update({'user/age': 25});
// firebaseRef.update({'app/name': 'Todo Application'});
