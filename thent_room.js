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
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + username +"!";
function AddRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name  " + Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'> #" + Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;


    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "thent_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}