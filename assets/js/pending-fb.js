// var db = firebase.firestore();
var db = firebase.database();
console.log(db);

realTimeDataStaut = {
  Name: "Sahu Shinghaniya",
  DOB: "14-07-2001",
  "Country code": "+91",
  "Country Code of Birth": "+91",
  Email: "PakaaluLK@gmail.com",
  "Father Name": "DK Popa",
  Gender: "Male",
  "Maritial Status": "Unmarried",
  "Mother Name": "Nikita Popa",
  Occupation: "student",
  Pending: "True",
  Phone: 9862564098,
  "Place of Birth": "Jhumritaliya",
  "Residential Address": "Satangali, Pakistan",
  "Tax Iden Number": 09583202523,
  "User ID": "ngctyfvjhf67tf564ruyv67",
  "Aadhar Card":
    "https://firebasestorage.googleapis.com/v0/b/identt-9b64f.appspot.com/o/8208208208_aadhar.jpg?alt=media&token=1e628abe-4816-4edc-9ff5-cee36ace8379",
  Requested: "Bank Form",
};

function addDataFb(data) {
  console.log("add data called");
  console.log(data["User ID"]);
  firebase
    .database()
    .ref("forms/" + data["User ID"])
    .set(data);

  // var docData = {
  //   name: "Shivam yadav",
  //   phone: 4894165484,
  //   requested: "Bank Form",
  //   time: firebase.firestore.Timestamp.now(),
  //   active: "view",
  // };
  // db.collection("data")
  //   .add(docData)
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   });
}

function readData() {
  console.log("read data called");
  tableData = [];
  var starCountRef = firebase.database().ref("forms/");
  starCountRef.on("value", (snapshot) => {
    const data = snapshot.val();
    const querySnapshot = Object.values(data);
    querySnapshot.forEach((doc) => {
      let items = doc;
      items.id = doc["User ID"];
      tableData.push(items);
      console.log(doc, "doc logeged");
      items = JSON.stringify(items);
      // console.log(`${doc.id} => ${items}`);
    });
    console.log(tableData);
    updateTableHTML(tableData);
    console.log(data, "data called");
    // updateStarCount(postElement, data);
  });

  // db.collection("data")
  //   .get()
  //   .then((querySnapshot) => {
  //     console.log(querySnapshot.docs);
  // querySnapshot.forEach((doc) => {
  //   let items = doc.data();
  //   items.id = doc.id;
  //   tableData.push(items);
  //   // console.log(doc.data());
  //   items = JSON.stringify(items);
  //   // console.log(`${doc.id} => ${items}`);
  // });
  // console.log(tableData);
  // updateTableHTML(tableData);
  // });

  // updateTableHTML(update);
  // console.log(update);
  // console.log(updateTableHTML);
}

function gameChange(params) {
  console.log(db);
  addDataFb();
}

function gameChange2(params) {
  console.log(db);
  readData();
}

// function updateTableHTML(myArray) {
//   console.log("this function called");
//   // maps the list onto the existing table
//   var tableBody = document.getElementById("your-table-id"),
//     newRow,
//     newCell;

//     console.log(tableBody,"table body");

//   // Reset the table
//   tableBody.innerHTML = "";

//   // Build the new table
//   for (var i = 1; i <= myArray.length; i++) {
//     newRow = document.createElement("tr");
//     tableBody.appendChild(newRow);
//     sno = document.createElement("td");
//     names = document.createElement("td");
//     phone = document.createElement("td");
//     type = document.createElement("td");
//     action = document.createElement("td");

//     sno.textContent = i;
//     names.textContent = myArray[i - 1].name;
//     names.classlist = "name";
//     phone.textContent = myArray[i - 1].phone;
//     phone.classlist = "phone";
//     type.textContent = myArray[i - 1].requested;
//     type.classlist = "type";
//     ata = document.createElement("a");
//     ata.textContent = myArray[i - 1].active;
//     ata.style.cursor = "pointer";
//     ata.setAttribute("onclick", "viewreq()");

//     newRow.appendChild(sno);
//     newRow.appendChild(names);
//     newRow.appendChild(phone);
//     newRow.appendChild(type);
//     newRow.appendChild(action);
//     action.appendChild(ata);
//   }
// }
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
        if (email_id === "admin@bank.com") {
          knowyourAdmin(true);
        } else {
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
// addDataFb(realTimeDataStaut);
