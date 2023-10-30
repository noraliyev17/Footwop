const baseURL = "http://localhost:3000/get";

async function getCountry() {
  const response = await fetch(baseURL);

  const { users } = await response.json();

  users.forEach(({ email, username, password, role, id }) => {
    const row = document.createElement("tr", "itr");

    row.innerHTML = `
       <tr >
          <td>${id}</td>
          <td>${email}</td>
          <td>${password}</td>
          <td>${username}</td>
          <td>${role}</td>
        </tr>
  `;

    $(".tr").appendChild(row);
  });
}
getCountry();

let create_username = document.getElementById("create_username");
let create_role = document.getElementById("create_role");
let create_email = document.getElementById("create_email");
let create_password = document.getElementById("create_password");
let button = document.getElementById("create_button");

button.addEventListener("click", () => {
  const email = create_email.value;
  const role = create_role.value;
  const username = create_username.value;
  const password = create_password.value;

  axios
    .post("http://localhost:3000/post ", {
      email,
      role,
      username,
      password,
    })

    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
      Toastify({
        text: `${
          error.response.data.message ||
          error.response.data.error ||
          error.response.data.massage
        }`,
        duration: 2000,
        gravity: "top", // Position the toast at the top
        positionLeft: false, // Position the toast on the right side
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
        close: true, // Custom background color // Stop hiding the toast when focused
      }).showToast();
    });
});

// Update








let update_username = document.getElementById("update_username");
let update_id = document.getElementById("update_id");
let update_email = document.getElementById("update_email");
let update_password = document.getElementById("update_password");
let update_button = document.getElementById("update_button");
let update_role = document.getElementById("update_role");


update_button.addEventListener("click", () => {
  const email = update_email.value;
  const id = update_id.value;
  const role = update_role.value;
  const username = update_username.value;
  const password = update_password.value;

  axios
    .put(`http://localhost:3000/put/${id} `, {
      email,
      id,
      username,
      password,
      role
    })

    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
      Toastify({
        text: `${
          error.response.data.message ||
          error.response.data.error ||
          error.response.data.massage
        }`,
        duration: 2000,
        gravity: "top", // Position the toast at the top
        positionLeft: false, // Position the toast on the right side
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
        close: true, // Custom background color // Stop hiding the toast when focused
      }).showToast();
    });
});




// delete



let delete_id = document.getElementById("delete_id");
let delete_email = document.getElementById("delete_email");
let delete_password = document.getElementById("delete_password");
let delete_button = document.getElementById("delete_button");


delete_button.addEventListener("click", () => {
  const email = delete_email.value;
  const id = delete_id.value;
  const password = delete_password.value;

  axios
    .delete(`http://localhost:3000/delete/${id} `, {
      email,
      id,
      password,
    })

    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response.data);
      Toastify({
        text: `${
          error.response.data.message ||
          error.response.data.error ||
          error.response.data.massage
        }`,
        duration: 2000,
        gravity: "top", // Position the toast at the top
        positionLeft: false, // Position the toast on the right side
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
        close: true, // Custom background color // Stop hiding the toast when focused
      }).showToast();
    });
});