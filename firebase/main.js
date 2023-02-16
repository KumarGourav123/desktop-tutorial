const firebaseConfig = {
  apiKey: "AIzaSyAY9s3eUOGZ0E4_wsD2T_-CvF37iZc4a2Q",
  authDomain: "fir-contact-8c720.firebaseapp.com",
  databaseURL: "https://fir-contact-8c720-default-rtdb.firebaseio.com",
  projectId: "fir-contact-8c720",
  storageBucket: "fir-contact-8c720.appspot.com",
  messagingSenderId: "527161686485",
  appId: "1:527161686485:web:34406deb9533ddb7dba55c",
  measurementId: "G-WYMH01PKDG"
  
  
    };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var Address = getInputVal('Address');
  
    // Save message
  //  console.log(name, company, email, phone, Address)
    saveMessage(name, company, email, phone, Address);

  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, Address){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      Address:Address
    });
  }