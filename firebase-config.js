import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjOTcCTg2GCNwlGgsXFRqkP0UGlc8U2Gw",
    authDomain: "los-chotos.firebaseapp.com",
    projectId: "los-chotos",
    storageBucket: "los-chotos.firebasestorage.app",
    messagingSenderId: "246176234302",
    appId: "1:246176234302:web:35efecf153e7b3e53c0a6f"
};

// Usamos una variable simple sin 'const' para que no de error al re-declarar
let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export const db = getFirestore(app);
