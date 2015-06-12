

document.getElementById("email_from").addEventListener('keyup', function () {
  localStorage.setItem('store_email', this.value);
});

document.getElementById("email_button").addEventListener('click', function(){
  localStorage.clear();
});

function init () {
  if (localStorage.store_email){
    document.getElementById("email_from").value = localStorage.store_email;
  }
}

document.addEventListener('load', init());
