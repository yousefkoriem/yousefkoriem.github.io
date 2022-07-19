 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADRdGoxQvzOX9XgklXa4l_TWRdGn_sU48",
    authDomain: "yousefkoriem-website.firebaseapp.com",
    databaseURL: "https://yousefkoriem-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "yousefkoriem-website",
    storageBucket: "yousefkoriem-website.appspot.com",
    messagingSenderId: "561662907858",
    appId: "1:561662907858:web:0d30fca1d406f53c7ae40b",
    measurementId: "G-GDWNRDHJ84"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);