// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   signInWithPopup,
//   FacebookAuthProvider,
// } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBa8TAAeuwKSoXsrOYl0cVtEZepaCuyCm4",
//   authDomain: "autotutorial-aadc2.firebaseapp.com",
//   projectId: "autotutorial-aadc2",
//   storageBucket: "autotutorial-aadc2.appspot.com",
//   messagingSenderId: "81142282951",
//   appId: "1:81142282951:web:f92f4344fff2c263159ce2",
// };

// var fire;
// if (!firebase.apps.length) {
//   fire = firebase.initializeApp(firebaseConfig);
// } else {
//   fire = firebase.app(); // if already initialized, use that one
// }
// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// export const db = getFirestore(app);
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// const providefb = new FacebookAuthProvider();
// export const signInWithFacebook = () => {
//   signInWithPopup(auth, providefb)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// // export { auth, db };
// // Initialize Firebase
// // const fire = initializeApp(firebaseConfig);

// export default fire;

  import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBa8TAAeuwKSoXsrOYl0cVtEZepaCuyCm4",
  authDomain: "autotutorial-aadc2.firebaseapp.com",
  projectId: "autotutorial-aadc2",
  storageBucket: "autotutorial-aadc2.appspot.com",
  messagingSenderId: "81142282951",
  appId: "1:81142282951:web:f92f4344fff2c263159ce2",
};

var fire;
if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  fire = firebase.app(); // if already initialized, use that one
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const providefb = new FacebookAuthProvider();
export const signInWithFacebook = () => {
  signInWithPopup(auth, providefb)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const providegh = new GithubAuthProvider();
export const signInWithGitHub = () => {
  signInWithPopup(auth, providegh)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
const providetw = new TwitterAuthProvider();
export const signInWithTwitter = () => {
  signInWithPopup(auth, providetw)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
// export { auth, db };
// Initialize Firebase
// const fire = initializeApp(firebaseConfig);
export default fire;