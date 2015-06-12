

document.getElementById("email_from").addEventListener('keyup', function () {
  localStorage.setItem('store_email', this.value);
  console.log(localStorage.store_email);
});




//on load puts it back
/*$(document).ready(function () {
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
        if (localStorage["message"]) {
            $('#message').val(localStorage["message"]);
        }
    }
    init();
});*/
function init () {
  if (localStorage.store_email){
    console.log("hello");
    console.log(localStorage.store_email);
    document.getElementById("email_from").value = localStorage.store_email;

  }
}

document.addEventListener('load', init());
