function login() {
      var mobileNo = document.getElementById('mobileNo').value;
      var username = document.getElementById('username').value;

      // Perform login functionality here

      alert("Logging in with Mobile No: " + mobileNo + " and Username: " + username);
  }

function closeModal() {
    var modal = document.querySelector('.modal-background');
    modal.style.display = 'none';
}