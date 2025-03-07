<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAkmTxbw0lH-IaTcxDDTC6PSeG2z34crSo",
    authDomain: "login-example-86158.firebaseapp.com",
    projectId: "login-example-86158",
    storageBucket: "login-example-86158.firebasestorage.app",
    messagingSenderId: "1047636248002",
    appId: "1:1047636248002:web:e1549843de3066a0bf025b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 const floatingInput =document.getElementById('email').value;
 const floatingPassword =document.getElementById('password').value;

 const submit=document.getElementById('submit');
 submit.addEventListner("click",function(event){
    event.preventDefaultDefault()
    alert(5)
 })


</script>