var firebaseConfig = {
      apiKey: "AIzaSyBLiEjE52Vn5HnRbiVa46k6vEiif7xisLo",
      authDomain: "kwitter-83183.firebaseapp.com",
      databaseURL: "https://kwitter-83183-default-rtdb.firebaseio.com",
      projectId: "kwitter-83183",
      storageBucket: "kwitter-83183.appspot.com",
      messagingSenderId: "786716119809",
      appId: "1:786716119809:web:b2bf0e6e1817d25de2c100"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function add_room()
{

      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoRoomname(name)
{

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_page.html";
}
