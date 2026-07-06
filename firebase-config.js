// KONSOLIDASI KONFIGURASI FIREBASE
// Ganti dengan data SDK Web App dari Firebase Console Anda!
const firebaseConfig = {
  apiKey: "AIzaSyC2CWNFh5Utg6RR3-XPP4WtZhsiybzL6n8",
  authDomain: "aecground.firebaseapp.com",
  databaseURL: "https://aecground-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aecground",
  storageBucket: "aecground.firebasestorage.app",
  messagingSenderId: "487923466910",
  appId: "1:487923466910:web:3b9e8a5f0d4fa53a02718f"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Deklarasikan variabel database agar bisa dipakai di file HTML lain
const db = firebase.database();
