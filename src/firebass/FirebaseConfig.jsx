import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9yZKprWmZxHDDL0_SBuNGvvM-v7v6yPM",
    authDomain: "bloging-app-1c1e8.firebaseapp.com",
    projectId: "bloging-app-1c1e8",
    storageBucket: "bloging-app-1c1e8.appspot.com",
    messagingSenderId: "353731155536",
    appId: "1:353731155536:web:172196d78ae4e3557ae355"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };