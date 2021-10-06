function checkauth(params) {
    
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
      
          //   document.getElementById("email").style.display = "block";
          //   document.getElementById("login_div").style.display = "none";
      
          var user = firebase.auth().currentUser;
      
          if (user != null) {
            var email_id = user.email;
            console.log(email_id);
            console.log(email_id === "admin@bank.com");
            if(email_id === "admin@bank.com"){
                knowyourAdmin(true);
            }else{
                knowyourAdmin(false);
            }
          }
        } else {
          // No user is signed in.
          //   document.getElementById("email").style.display = "none";
          //   document.getElementById("login_div").style.display = "block";
        }
      });
}

checkauth();
