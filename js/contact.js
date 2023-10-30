let button = document.getElementById("myButton");
let namel = document.getElementById("name");   
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

button.addEventListener("click", () => {
  const emaill = email.value;
  const ism = namel.value;
  const raqam = phone.value;
  const mass = message.value;
  console.log(emaill);
  axios
    .post("http://localhost:3000/send", {
      emaill,
      ism,
      raqam,
      mass,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((eror) => console.log(eror));
});
