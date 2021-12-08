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
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
messsage=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messsage_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+messsage_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


user_name=localStorage.getitem("user_name");
room_name=localStorage.getitem("room_name");

function send()
{

      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            messsage:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}

function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_page.html";
}

function updateLike(message_id)
{

      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}