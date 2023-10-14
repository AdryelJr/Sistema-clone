import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    signOut
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

const uid = localStorage.getItem('uid');

auth.onAuthStateChanged((user) => {
    const h1 = document.getElementById('logado');
    const btnLogar = document.getElementById('btnLogar');

    if(user){
        h1.innerHTML =`Bem vindo ${user.displayName}`;
        btnLogar.style.display = 'none';
    }else{
        h1.innerHTML = `Usuário não logado`;
        btnLogar.style.display = 'inline-block';
        console.log('Usuario não autenticado')
    }  
});

const btnDeslogar = document.getElementById('deslogar').addEventListener('click', function(){
    signOut(auth).then(() => {
        localStorage.removeItem('uid');
    })
    .catch((error) => {
        console.log('Erro ao deslogar: '+ error.message)
    });
});
