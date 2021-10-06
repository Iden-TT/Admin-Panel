var db = firebase.firestore();
function readData() {
    tableData = [];
   const query = window.location.search.substring(1);
   const vars = query.split("=");
   const ID = vars[1];
   console.log(ID);
    db.collection("data").doc(ID)
      .get()
      .then((doc) => {
        console.log(doc);
        // querySnapshot.forEach((doc) => {
          let items = doc.data();
          console.log(items);
          // items.id = doc.id()
          tableData = items;
          // console.log(doc.data());
          items = JSON.stringify(items);
          // console.log(`${doc.id} => ${items}`);
          console.log(tableData);
        });
        // updateTableHTML(tableData);
      // });
  }
 
  
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
        } 
      });
}

checkauth();
readData();

  
  