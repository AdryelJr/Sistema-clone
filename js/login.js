import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCyNeDMz1KXYVgmH3B7F55rF8Wqmi--9N8",
    authDomain: "webapp-80681.firebaseapp.com",
    projectId: "webapp-80681",
    storageBucket: "webapp-80681.appspot.com",
    messagingSenderId: "831614305593",
    appId: "1:831614305593:web:067ac59b1d16ee2f4fd4e8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

const email = document.getElementById('email');
const senha = document.getElementById('senha');

const form = document.getElementById('formLogin').addEventListener('submit', function(event){
    event.preventDefault();

    var obj = {
        email: email.value,
        senha: senha.value,
    }

    signInWithEmailAndPassword(auth, obj.email, obj.senha)
        .then(function (sucess){
            const user = auth.currentUser;
            if(user){
                const uid = user.uid;
                localStorage.setItem('uid', uid);
            }

            setTimeout(function (){
                window.location.replace('index.html');
            }, 1000)
        })
        .catch(function (error) {
            alert(error.message);
            console.log(error.message);
        })

})