import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* YOUR FIREBASE CONFIG */

const firebaseConfig = {

    apiKey: "_________",

    authDomain: "_________",

    projectId: "_________",

    storageBucket: "_________",

    messagingSenderId: "_________",

    appId: "_________"
};

/* INITIALIZE FIREBASE */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/* REGISTER */

window.register = function () {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            document.getElementById("message").innerText =
                "Account Created!";

        })

        .catch((error) => {

            document.getElementById("message").innerText =
                error.message;
        });
}

/* LOGIN */

window.login = function () {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            document.getElementById("message").innerText =
                "Logged In!";

            window.location.href = "dashboard.html";
        })

        .catch((error) => {

            document.getElementById("message").innerText =
                error.message;
        });
}

/* CHECK LOGIN STATE */

onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("User Logged In:", user.email);

    } else {

        console.log("No User");
    }
});

/* LOGOUT */

window.logout = function () {

    signOut(auth)

        .then(() => {

            window.location.href = "login.html";

        });
}