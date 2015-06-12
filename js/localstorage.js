

document.getElementById("email_from").addEventListener('keyup', function () {
  localStorage.setItem('store_email', this.value);
  console.log(localStorage.store_email);
});




