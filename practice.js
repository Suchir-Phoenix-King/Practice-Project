const firebaseConfig = {
    apiKey: "AIzaSyCV0h2iIo6jEZrx0gOMG1-EtkixC6enmas",
    authDomain: "practice-project-4c2e4.firebaseapp.com",
    databaseURL: "https://practice-project-4c2e4-default-rtdb.firebaseio.com",
    projectId: "practice-project-4c2e4",
    storageBucket: "practice-project-4c2e4.appspot.com",
    messagingSenderId: "281971292280",
    appId: "1:281971292280:web:6475ed3ff01aaa2b6a558d",
    measurementId: "G-ZT74CBJTN7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}