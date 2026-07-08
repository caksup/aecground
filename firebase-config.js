// =========================================================
// RIWAYAT PERUBAHAN VERSI JAVASCRIPT (firebase-config.js)
// Link Edit: https://github.com/[USERNAME]/[REPO]/edit/main/firebase-config.js
// =========================================================
// - v1.0.0 (6 Jul 2026) : Inisialisasi awal koneksi Firebase.
// - v2.0.0 (6 Jul 2026) : Pemisahan file konfigurasi dari HTML.
// - v3.0.0 (8 Jul 2026) : Standarisasi repositori siap salin.
// =========================================================

const firebaseConfig = {
    apiKey: "AIzaSyA1...", // GANTI DENGAN API KEY ANDA
    authDomain: "proyek-kuis-anda.firebaseapp.com",
    databaseURL: "https://proyek-kuis-anda-default-rtdb.firebaseio.com",
    projectId: "proyek-kuis-anda",
    storageBucket: "proyek-kuis-anda.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234:web:abcd"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
