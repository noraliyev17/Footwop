


const baseURL = "http://localhost:3000/get/product/kit";

// console.log(baseURL);

async function getCountry() {
  const response = await fetch(baseURL);
//   console.log(response);

  const { products } = await response.json();

//   console.log(products);

  products.forEach(
    ({ type, name, size, brand, year, price, discription, img: png, id }) => {
      const row = createElement("div", "row");

      // console.log(name + "a");

      row.innerHTML = `
      <div class="col-sm-6 col-md-4 col-lg-3 ">
      <div class="card">
      <a target="_blank" onclick="openModal()">
      <img class="card-image" src="http://localhost:3000${png}" alt="" />
        <h3 class="card-title">${name}</h3>
        <p class="card-description">${discription}</p>
        <p class="card-description">${year}</p>
        <p class="card-price">${price}</p>
        <button class="card-button">Add to Cart</button>
        </a>
      </div>
    </div>
  `;

      $(".row").appendChild(row);
    }
  );
}
getCountry();







var modal = document.getElementById("myModal");

let boxes = document.querySelectorAll(".box");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (event.target == modal) {
    openModal();
   
    
  
  }
});














