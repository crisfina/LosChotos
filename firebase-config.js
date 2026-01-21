import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjOTcCTg2GCNwlGgsXFRqkP0UGlc8U2Gw",
  authDomain: "los-chotos.firebaseapp.com",
  projectId: "los-chotos",
  storageBucket: "los-chotos.firebasestorage.app",
  messagingSenderId: "246176234302",
  appId: "1:246176234302:web:35efecf153e7b3e53c0a6f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
