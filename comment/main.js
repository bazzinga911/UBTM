// Firstly, the Firebase configuration

  var firebaseConfig = {
    //add your own firebase config here
    apiKey: "AIzaSyCOXJlmE0WqJ73kF4AVt7oJIsknj5m3xfE",
    authDomain: "upbright-login.firebaseapp.com",
    databaseURL: "https://upbright-login.firebaseio.com",
    projectId: "upbright-login",
    storageBucket: "upbright-login.appspot.com",
    messagingSenderId: "939594861967",
    appId: "1:939594861967:web:18b74510347d8861024ffa"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}