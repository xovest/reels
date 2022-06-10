import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "whateveroisjfopjadpjf",
  authDomain: "test-7861b.firebaseapp.com",
  projectId: "reels-14d5a",
  storageBucket: "test-7861b.appspot.com",
  messagingSenderId: "982558408905",
  appId: "1:982558408905:web:faa5660fa1ca4f83190d18",
  measurementId: "G-FNRPS7RGFX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db