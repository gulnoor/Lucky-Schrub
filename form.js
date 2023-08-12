(function () {
  const password = document.getElementById("password");
  const password_error = document.getElementsByClassName("password-error");
  const email = document.getElementById("user-email");
  const name = document.getElementById("user-name");
  const phone = document.getElementById("user-contact");
  const submit = document.getElementById("submitbtn");
  const regForm = document.querySelector(".reg-form");


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const formValid = () => {
    if (
      name.value.length > 0 &&
      validateEmail(email.value) &&
      password.value.length >= 8
      /* phone validation */
    ) {
      submit.disabled = false;
      console.log("valid");
      return true;
    }
    console.log("invalid");
    submit.disabled = true;
    return false;
  };
  const checkPassword = (e) => {
    console.log("validating form...");
    formValid();
    if (e.target.value.length < 8) {
      password_error[0].style.display = "flex";

    } else {
      password_error[0].style.display = "none";
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValid()) {
      alert("registration successful");
      window.location.href = "./index.html";
    } else {
      alert("invalid");
    }
  };
  submit.addEventListener("click", submitHandler);

  password.addEventListener("input", checkPassword);
  name.addEventListener("input", formValid);
  email.addEventListener("input", formValid);
  phone.addEventListener("input", formValid);


})();
