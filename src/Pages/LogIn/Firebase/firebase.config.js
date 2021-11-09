console.log(process.env)

const firebaseConfig = {

  /*   apiKey: "AIzaSyDDsTLQk6fhgzAbQgPJ9ac6X6lgRMF9Nec",
    authDomain: "doctors-portal-59e4e.firebaseapp.com",
    projectId: "doctors-portal-59e4e",
    storageBucket: "doctors-portal-59e4e.appspot.com",
    messagingSenderId: "1033859840699",
    appId: "1:1033859840699:web:b2bd6b4ceeb4607090879e" */

  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
