firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    //   document.getElementById("email").style.display = "block";
    //   document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("email").innerHTML = email_id;
    }
  } else {
    // No user is signed in.
    //   document.getElementById("email").style.display = "none";
    //   document.getElementById("login_div").style.display = "block";
  }
});

function login(e) {
  // console.log(e);
  //   e.preventDefault();
  document
    .querySelector("form.form-1")
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then(function (user) {
      console.log(user);
      window.alert(`login success of user with: ${user.email}`);
      document.location = "./dashboard.html";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
      location.reload();
      
      // ...
    });
}

function signup(e) {
    // console.log(e);
    //   e.preventDefault();
    document
    .querySelector("form.form-1")
    .addEventListener("submit", function (e) {
        e.preventDefault();
    });
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    
    firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then(function (user) {
        console.log(user);
        window.alert(`signup success of user with: ${user.email}`);
        
        document.location = "./dashboard.html";
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error : " + errorMessage);
        
        location.reload();
      // ...
    });
}
function logout() {
  firebase.auth().signOut();
}

function wantToSignup(params) {
  console.log("workint");
  document.getElementById("loginbtn").style.display = "none";
  document.getElementById("signupbtn").style.display = "contents";
}
function wantToLogin(params) {
  document.getElementById("loginbtn").style.display = "contents";
  document.getElementById("signupbtn").style.display = "none";
}
