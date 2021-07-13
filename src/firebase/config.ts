import { initializeApp as initFirebase } from "firebase/app";

const config = {
  apiKey: "AIzaSyCARcxlENfvB7VMywvQ2n8sAatWDA4vJ5A",
  authDomain: "zapalniczki-b10e1.firebaseapp.com",
  projectId: "zapalniczki-b10e1",
  storageBucket: "zapalniczki-b10e1.appspot.com",
  messagingSenderId: "766964263388",
  appId: "1:766964263388:web:2f10f9b9ab0d9e8fd58719",
  databaseURL:
    "https://zapalniczki-b10e1-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const initializeApp = () => initFirebase(config);
