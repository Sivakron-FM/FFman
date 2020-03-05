var config = {
    	apiKey: "AIzaSyBwBhv14BJEc4lUiYtWrBbpM7cMQpZU23w",
    	authDomain: "application-project-d9934.firebaseapp.com",
    	databaseURL: "https://application-project-d9934.firebaseio.com",
    	projectId: "application-project-d9934",
    	storageBucket: "application-project-d9934.appspot.com",
    	messagingSenderId: "747241468892",
    	appId: "1:747241468892:web:39bdeddef2e58fe1769519",
    	measurementId: "G-QTQDQMR4JB"
  };
  
  	firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  function writeUserData(userId, name, email) {
  		firebase.database().ref('Users/').set({
  				username: fronk,
  				email: email
  		});
  }