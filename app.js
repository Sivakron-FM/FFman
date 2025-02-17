 //function() 
 //initialize Firebase
var config = {
    	apiKey: "AIzaSyBwBhv14BJEc4lUiYtWrBbpM7cMQpZU23w",
    	authDomain: "application-project-d9934.firebaseapp.com",
    	databaseURL: "https://application-project-d9934.firebaseio.com",
    	projectId: "application-project-d9934",
    	storageBucket: "application-project-d9934.appspot.com",
    	messagingSenderId: "747241468892",
    	appId: "1:747241468892:web:7d2a2f05c178d1d0769519",
    	measurementId: "G-K0JB9TT4G8"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  
  const docRef = firebase.doc("users/usersData");
  const header = document.querySelector("#Database");
  const inputText = document.querySelector("#input");
  const saveData = document.querySelector("#saveData");
  
  
  saveData.addEventListener("click", function() {
  		const saveText = inputText.value;
  		console.log("I am going to save " + saveText + " to Firestore");
  		docRef.set({
  			name: saveText
  		}).then(function() {
  				console.log("Status saved!!");
  		}).catch(function (error) {
  			console.log("Get an error: " + error);
  		});
  })
 