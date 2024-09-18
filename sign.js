// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfLqLRIX83dljMqf0kkh6Uvn3VXN91n-c",
    authDomain: "project-09-8c41e.firebaseapp.com",
    projectId: "project-09-8c41e",
    storageBucket: "project-09-8c41e.appspot.com",
    messagingSenderId: "979196492544",
    appId: "1:979196492544:web:b5c17dca3ee27dadec11e5",
    measurementId: "G-YNGH88ZBML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();



// Getting ids
let email = document.getElementById('email')
let password = document.getElementById('password')
let fullName = document.getElementById('fullName')


window.signUp = () => {
    let obj = {
        email: email.value,
        password: password.value,
        fullName: fullName.value,
    }
    console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
            console.log(res); //Confirm the login
            let refrence = res.user.uid;
            obj.id = refrence // give uid in obj
            const ref = doc(db, "Users", refrence)
            setDoc(ref , obj)
            .then(() => {
                console.log(obj);

            })
            .catch((dbErr) => {
                console.log(dbErr);
            })
            setTimeout(changePg,5000)
            function changePg() {
                window.location.href = "login.html"
            }
        })
        .catch((err) => {
            alert("YOu Make Some KiNd Of MisTaKe")
        });

};
