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
  tableData = [];

  db.collection("data")
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        tableData.push(doc.data());
        // console.log(doc.data());
        let items = doc.data();
        items = JSON.stringify(items);
        // console.log(`${doc.id} => ${items}`);
      });
      console.log(tableData);
      updateTableHTML(tableData);
    });
  // update = [
  //   [1, "saurav sonu", "095564564665", "bank form", "view"],
  //   [2, "saurav sonu", "095564564665", "bank form", "view"],
  //   [3, "saurav sonu", "095564564665", "bank form", "view"],
  //   [4, "saurav sonu", "095564564665", "bank form", "view"],
  //   [5, "saurav sonu", "095564564665", "bank form", "view"],
  // ];

  // function updateTableHTML(myArray) {
  //   // maps the list onto the existing table
  //   var tableBody = document.getElementById("your-table-id"),
  //     newRow,
  //     newCell;

  //   // Reset the table
  //   tableBody.innerHTML = "";

  //   // Build the new table
  //   for (var i = 0; i < myArray.length; i++) {
  //     newRow = document.createElement("tr");
  //     tableBody.appendChild(newRow);

  //     if (myArray[i] instanceof Array) {
  //       for (var j = 0; j < myArray[i].length; j++) {
  //         newCell = document.createElement("td");
  //         newCell.textContent = update[i][j];
  //         newRow.appendChild(newCell);
  //       }
  //     } else {
  //       newCell = document.createElement("td");
  //       newCell.textContent = myArray[i];
  //       newRow.appendChild(newCell);
  //     }
  //   }
  // }
  update =[ 
    {
    name: "saurav",
    phone: 2039509235,
    type: "bank form",
    action: "view"
  },
    {
    name: "saurav",
    phone: 2039509235,
    type: "bank form",
    action: "view"
  },
    {
    name: "saurav",
    phone: 2039509235,
    type: "bank form",
    action: "view"
  },
    {
    name: "saurav sone",
    phone: 2009235,
    type: "bank form",
    action: "view"
  },
    {
    name: "saurav monkey",
    phone: 2039509235,
    type: "bank form",
    action: "view"
  },
  ]

  // updateTableHTML(update);
  console.log(update);
  console.log(updateTableHTML);
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
