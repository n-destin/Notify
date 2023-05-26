/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable indent */
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCpgJEyYO2SDs3bbuiPloXr8lM2xdB-FI0',
  authDomain: 'notify-1f5d1.firebaseapp.com',
  databaseURL: 'https://notify-1f5d1-default-rtdb.firebaseio.com',
  projectId: 'notify-1f5d1',
  storageBucket: 'notify-1f5d1.appspot.com',
  messagingSenderId: '722479830956',
  appId: '1:722479830956:web:1dd94fa8ee817e6ccacc09',
  measurementId: 'G-W65VFDBW23',
};

function Message(senderName, messageContent) {
  this.sender = senderName;
  this.message = messageContent;
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Chats = database.ref('chats');
const Transcipts = database.ref('transcripts');

export function newMessage(userId, sessionId, sender, content) {
  database.ref('chats').child(userId).child(sessionId).push(new Message(sender, content));
}

export function newChat(userId, sessionId, message) {
  console.log('positng to firebase');
  const created = database.ref('chats').child(userId).child(sessionId).push(message);
  return created.key;
}

export function onChangeMessageChange(userId, callback) {
  database.ref('chats').child(userId).on('value', (snapshort) => {
    callback(snapshort.val());
  });
}

export function onSessionChange(userId, callback) {
  database.ref('transcripts').child(userId).on('value', (snapshort) => {
    console.log(snapshort.val());
    callback(snapshort.val());
  });
}

export function changeContent(userId, sessionId, messageId, content) {
  console.log('called');
  console.log(content);
  database.ref('chats').child(userId).child(sessionId).child(messageId).content.push(content);
}

export function getLecture(userId, lectureId, callback) {
  database.ref('transcripts').child(userId).child(lectureId).on('value', (snapshort) => {
    callback(snapshort.val());
  });
}

export function newTransctip(userId, Notes) {
  Transcipts.child(userId).push(Notes);
}

export function deleteLecture(id) {
  Transcipts.child(id).remove();
}

export function newUser(id) {
  try {
    Transcipts.child(id).push('');
    console.log('creating a new user');
  } catch (error) {
    console.log(error.message);
    console.log('Loggin in');
  }
}
