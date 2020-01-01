import app from 'firebase/app';
import 'firebase/auth';

const config = {
    // apiKey: process.env.REACT_APP_API_KEY,
    apiKey: "AIzaSyBSR9Wz1uUl3KhzC-AB8jsCtlBtcZ1YF-M",
    authDomain: "note-app-771cb.firebaseapp.com",
    databaseURL: "https://note-app-771cb.firebaseio.com",
    projectId: "note-app-771cb",
    storageBucket: "note-app-771cb.appspot.com",
    messagingSenderId: "877590012303",
    appId: "1:877590012303:web:20a7110bbccbff3c136bfa"
};


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    /* *** Auth API *** */
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;