import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDwyBZvc47hal6-wWaSPZBBsSHApwtdA9w",
    authDomain: "fir-test-6ac95.firebaseapp.com",
    databaseURL: "https://fir-test-6ac95.firebaseio.com",
    projectId: "fir-test-6ac95",
    storageBucket: "fir-test-6ac95.appspot.com",
    messagingSenderId: "360761491544"
};

let app = Firebase.initializeApp(config);

export const db = app.database();