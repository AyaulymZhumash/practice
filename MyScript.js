username = document.querySelector('#username');
password = document.querySelector('#password');
confirm = document.querySelector('#confirm');
btn = document.querySelector('#btn');
btn.setAttribute('disabled', true);
username.oninput = function() {
  if (username.value.length > 0) {
    password.oninput = function() {
      if (password.value.length > 0) {
        confirm.oninput = function() {
          if (confirm.value.length > 0) {
            btn.removeAttribute('disabled');
          }
          else btn.setAttribute('disabled', true);
        }
      }
    }
  }
}
function register() {
  password1 = document.getElementById("password").value;
  password2 = document.getElementById("confirm").value;
      if( password2 != password1)
    {
     alert ('Password not Matched');
    }
    else
    {
        alert('You have successfully registered');
    }
  }
username.setAttribute('required', true);
password.setAttribute('required', true);
confirm.setAttribute('required', true);
