(function () {
  const overlay = document.getElementsByClassName("overlay")[0];
  overlay.addEventListener("click", () => overlay.style.display = "none");
  
  const password = document.getElementById("password");
  const password_err_message = document.getElementsByClassName("password-error");
  const email = document.getElementById("user-email");
  const name = document.getElementById("user-name");
  const whale = document.querySelectorAll("input[name=whale]");
  // const phone = document.getElementById("user-contact");
  const submit = document.getElementById("submitbtn");
  let isFormValid = false;
  let [name_status, email_status, password_status, phone_status, whale_status] = [
    false,
    false,
    false,
    true,
    false
  ];

  const validateInput = (e) => {
    switch (e.target.name) {
      case "username": {
        name_status = name.value.length > 0;
        !name_status? name.style.border = "1px solid red": name.style.border = "1px solid #ccc";
        break;
      }
      case "email": {
        email_status = !!String(e.target.value).toLowerCase().match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ;
        !email_status? email.style.border = "1px solid red": email.style.border = "1px solid #ccc";
        break;
      }
      case "password": {
        if (e.target.value.length < 8) {
          password_err_message[0].style.display = "flex";
          password.style.border = "1px solid red";
          password_status = false;

        } else {
          password_err_message[0].style.display = "none";
          password.style.border = "1px solid #ccc";
          password_status = true;
        }
        break;
      }
      case "user-contacts":
        // phone validation
        break;
      case "whale":

        whale_status = true;
        break;
      default:
        throw new Error("Invalid input");
    }

    //enable or disable button based on validation status
    if (name_status && email_status && password_status && phone_status && whale_status) {
      submit.disabled = false;
      isFormValid = true;
    } else {
      submit.disabled = true;
    }
  };
  
  const reset_form = () => {
    name.value = "";
    email.value = "";
    password.value = "";
    // phone.value = "";
    whale.forEach((whale) => whale.checked = false);
    submit.disabled = true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      overlay.style.display = "block";
      reset_form();
    } else {
      alert("invalid");
    }
  };


  submit.addEventListener("click", submitHandler);
  password.addEventListener("input", validateInput);
  name.addEventListener("input", validateInput);
  email.addEventListener("input", validateInput);
  whale.forEach((whale) => whale.addEventListener("input", validateInput));
  // phone.addEventListener("input", validateInput);
})();
