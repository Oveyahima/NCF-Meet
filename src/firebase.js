import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get,set } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAeKo2LsvFJvz_5cFYBwJQWqGGDrd73zaA",
    authDomain: "ncf-auth.firebaseapp.com",
    databaseURL: "https://ncf-auth-default-rtdb.firebaseio.com",
    projectId: "ncf-auth",
    storageBucket: "ncf-auth.appspot.com",
    messagingSenderId: "507271869782",
    appId: "1:507271869782:web:37755ecad85ed65218d2f7",
    measurementId: "G-HWL9GHSGHV"
  };

// Initialize Firebase app with error handling
let firebaseApp;
try {
    firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
    console.error('Error initializing Firebase:', error);
    // Handle initialization error (e.g., show an error message, fallback mechanism)
}

// Export Firebase database methods directly
const database = getDatabase(firebaseApp);

// Export Firebase authentication methods
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { firebaseApp, database, ref, get, set, auth, googleProvider };
