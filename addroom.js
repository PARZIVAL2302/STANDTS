user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function getData(){
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;

        console.log("room Name = " + Room_names);

        row = "<div class="+Room_names+" onclick+'redirctToNextPage(this.id)'> #" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML+= row;
});});
}

function addRoom(){
    room_name = docuemnt.getElementById("room_name").value;
    firebase.databse().ref("/").child(room_name).update({
        purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location="page.html";
}

function redirectToNextPage(){
    console.log(names);
    localStorage.setItem("room_name", names);
    window.location="page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}