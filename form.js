(function () {
  const password = document.getElementById("password");
  const password_err_message = document.getElementsByClassName("password-error");
  const email = document.getElementById("user-email");
  const name = document.getElementById("user-name");
  // const phone = document.getElementById("user-contact");
  const submit = document.getElementById("submitbtn");
  let isFormValid = false;
  let [name_status, email_status, password_status, phone_status] = [
    false,
    false,
    false,
    true,
  ];

  const validateInput = (e) => {
    switch (e.target.name) {
      case "username":
        name_status = name.value.length > 0;
        break;

      case "email": {
        email_status = Boolean(
          String(e.target.value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        );
        break;
      }

      case "password": {
        if (e.target.value.length < 8) {
          password_err_message[0].style.display = "flex";
          password_status = false;
        } else {
          password_err_message[0].style.display = "none";
          password_status = true;
        }
        break;
      }

      case "user-contacts":
        // phone validation
        break;

      default:
        throw new Error("Invalid input");
    }

    //enable or disable button based on validation status
    if (name_status && email_status && password_status && phone_status) {
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
    submit.disabled = true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("registration successful");
      reset_form();
    } else {
      alert("invalid");
    }
  };


  submit.addEventListener("click", submitHandler);
  password.addEventListener("input", validateInput);
  name.addEventListener("input", validateInput);
  email.addEventListener("input", validateInput);
  // phone.addEventListener("input", validateInput);
})();
