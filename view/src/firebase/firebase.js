import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB838d1HPSDY22is9AH46Y7B3UnFaHkcAc',
  authDomain: 'discord-clone-344c1.firebaseapp.com',
  projectId: 'discord-clone-344c1',
  storageBucket: 'discord-clone-344c1.appspot.com',
  messagingSenderId: '40775849466',
  appId: '1:40775849466:web:79bd319ba9e109a16dc043',
  measurementId: 'G-WWHZ13G2N8',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
