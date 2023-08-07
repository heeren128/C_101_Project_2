// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDi23WNU5y5IasyOOvScYMDxSH0OIMYU8Q",
    authDomain: "project101-27668.firebaseapp.com",
    databaseURL: "https://project101-27668-default-rtdb.firebaseio.com",
    projectId: "project101-27668",
    storageBucket: "project101-27668.appspot.com",
    messagingSenderId: "420522595221",
    appId: "1:420522595221:web:d1d7ea4036768547281c9c"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
  console.log("Room Name -" + Room_names);
  row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();



