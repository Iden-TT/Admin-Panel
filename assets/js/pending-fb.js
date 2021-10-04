var db = firebase.firestore();

function addDataFb(data) {
  //   db.collection("users")
  //     .add({
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815,
  //     })
  //     .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  var docData = {
    name: "Shivam yadav",
    phone: 4894165484,
    requested: "Bank Form",
    time: firebase.firestore.Timestamp.now(),
    active: "view",
  };
  db.collection("data")
    .add(docData)
    .then(() => {
      console.log("Document successfully written!");
    });
}

function readData() {
  //   var leadsRef = database.ref('users');
  // leadsRef.on('value', function(snapshot) {
  //   console.log(snapshot);
  //     snapshot.forEach(function(childSnapshot) {
  //       var childData = childSnapshot.val();
  //       console.log(childData);
  //     });
  // });
  // db.collection('users').get().then((snapshot) => {
  //     console.log(snapshot);
  //     snapshot.forEach(doc => {
  //         let items = doc.data();

  //         /* Make data suitable for rendering */
  //         items = JSON.stringify(items);

  //         /* Update the components state with query result */
  //         // this.setState({ items : items })
  //     });

  //   });
  //   db.collection("users")
  //     .get()
  //     .then((doc) => {
  //         console.log(doc.data());
  //     //   if (doc) {
  //     //     console.log("Document data:", doc.data());
  //     //   } else {
  //     //     // doc.data() will be undefined in this case
  //     //     console.log("No such document!");
  //     //   }
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //     });
  db.collection("data")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.data());
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        let items = doc.data();
        items = JSON.stringify(items);
        console.log(`${doc.id} => ${items}`);
      });
    });
}

function gameChange(params) {
  console.log(db);
  addDataFb();
}
function gameChange2(params) {
  console.log(db);
  readData();
}
