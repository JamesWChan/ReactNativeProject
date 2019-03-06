import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBMwS1qAOXjyE845NV_F26gCI9UkBskVag",
    authDomain: "xgreener-1925b.firebaseapp.com",
    databaseURL: "https://xgreener-1925b.firebaseio.com",
    projectId: "xgreener-1925b",
    storageBucket: "xgreener-1925b.appspot.com",
    messagingSenderId: "274545094473"
};

let app = Firebase.initializeApp(config);

export const db = app.database();