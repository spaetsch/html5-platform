//event listeners for text fields: on keyup in input text field, save text to local storage
document.getElementById("email_from").addEventListener('keyup', function() {
  localStorage.setItem('store_email', this.value);
});

document.getElementById("email_subject").addEventListener('keyup', function() {
  localStorage.setItem('store_subject', this.value);
});

document.getElementById("email_message").addEventListener('keyup', function() {
  localStorage.setItem('store_message', this.value);
});

//event listener: on click for email_button, clear local storage
document.getElementById("email_button").addEventListener('click', function(){
  localStorage.clear();
});

function init () {
  //if there is text saved, populate the text inputs with it
  if (localStorage.store_email){
    document.getElementById("email_from").value = localStorage.store_email;
  }
  if (localStorage.store_subject){
    document.getElementById("email_subject").value = localStorage.store_subject;
  }
  if (localStorage.store_message){
    document.getElementById("email_message").value = localStorage.store_message;
  }
}

document.addEventListener('load', init());
