import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import fireBaseConfig from "./fireBaseConfig";

const firebaseApp = firebase.initializeApp(fireBaseConfig);
const db = firebaseApp.firestore();

export default {
  fbPopup: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },

  addUser: async (u) => {
    await db.collection("users").doc(u.id).set(
      {
        name: u.name,
        avatar: u.avatar,
      },
      { merge: true }
    );
  },
};
