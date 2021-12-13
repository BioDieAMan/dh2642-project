import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5LRomlEdaktS_-XPX9-D_eGO4xG--yIY",
  authDomain: "covindex-dh2642-project.firebaseapp.com",
  databaseURL:
    "https://covindex-dh2642-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "covindex-dh2642-project",
  storageBucket: "covindex-dh2642-project.appspot.com",
  messagingSenderId: "216944655997",
  appId: "1:216944655997:web:250c671ebf2557f1defb14",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
