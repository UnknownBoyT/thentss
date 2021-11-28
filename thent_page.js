const firebaseConfig = {
    apiKey: "AIzaSyC2vGYEFE-M9G6zcFRo8LqDx_j03dj8MUY",
    authDomain: "kwitter-80b47.firebaseapp.com",
    databaseURL: "https://kwitter-80b47-default-rtdb.firebaseio.com",
    projectId: "kwitter-80b47",
    storageBucket: "kwitter-80b47.appspot.com",
    messagingSenderId: "445087622870",
    appId: "1:445087622870:web:5f2b732beabb1662b30b77"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
 username = localStorage.getItem("user_name");
 roomname = localStorage.getItem("room_name");
 function send(){
       msg = document.getElementById("msg").value;
       firebase.database().ref(roomname).push({
          Name:username,
          message : msg,
          like : 0
       });
       document.getElementById("msg").value;
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + Name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value = "+ like +" onclick='updateLike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_tag;
document.getElementById("output").innerHTML += row
//End code
    } });  }); }
    
getData();

function updateLike(message_id) {
    console.log("clicked on like button" + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updateLikes = Number(likes) +  1;
console.log(updateLikes);
firebase.database().ref(roomname).child(message_id).update({
    like:updateLikes
});
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}