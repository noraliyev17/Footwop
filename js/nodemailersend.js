let button = document.getElementById("subscribe");
let input = document.getElementById("subs_inp");

button.addEventListener("click", ()=>{
  const email = input.value;
  axios.post('http://localhost:3000/send/footer ', {
    email
  })
.then((response) => {
      console.log(response.data)
    })
    .catch((eror) => console.log(eror))
})