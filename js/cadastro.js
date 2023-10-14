

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { 
    getAuth, 
    updateProfile,
    createUserWithEmailAndPassword,
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


const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

const form = document.getElementById('formCadastro')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var obj = {
        email: email.value,
        senha: senha.value,
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.senha)
        .then(function (sucess){
            updateProfile(auth.currentUser, {
                displayName: nome.value,
            }).then(function(){
                window.location.replace('index.html');
            }).catch(function (error) {
                alert('Erro'+ error.message);
            });
        })
        .catch(function(error) {
            alert(error.message)
        })
});