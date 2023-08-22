import { initializeApp } from 'firebase/app';
import { getAuth,} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBkK1E9bu8kjg3zhhq0jNo1pw2aFpZ4f4",
    authDomain: "fir-auth-7b707.firebaseapp.com",
    projectId: "fir-auth-7b707",
    storageBucket: "fir-auth-7b707.appspot.com",
    messagingSenderId: "751925292618",
    appId: "1:751925292618:web:73a96902b66016e8a840b3",
    measurementId: "G-76P8Y234EY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
