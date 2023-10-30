// vaqtni olish uchun start
// function getYear() {
//   var currentDate = new Date();
//   var currentYear = currentDate.getFullYear();
//   console.log(document.querySelector("#displayYear"));
//   document.querySelector("#displayYear").innerHTML = currentYear;
// }
// getYear();

// vaqtni olish uchun end

// Corusel Uchun start

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

// Corusel Uchun end

// modal start

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

// modal end






boxes.forEach((box) => box.addEventListener("click", getCountry));

const baseURL = "http://localhost:3000/allproducts";

async function getCountry() {
  $(".modal").innerHTML = "";
  const response = await fetch(baseURL);

  const { products } = await response.json();

  console.log(products);

  products.forEach(
    ({ type, name, size, brand, year, price, discription, img: png }) => {
      console.log(`http://localhost:3000${png}`);
      const row = createElement("div");

      console.log(name+'a');


      row.innerHTML = `
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <div class="box">
      <a target="_blank" onclick="openModal()">
        <div class="modal-box-all">
          <img class="img-modal" src="http://localhost:3000${png}" alt="" />
          <div class="modal-texts">
            <p class="modal-box-h1">Name: ${name}</p>
            <p class="modal-box-h1">Size: ${size}</p>
            <p class="modal-box-h1">Year: ${year}</p>
            <p class="modal-box-h1">Price: ${price}</p>
            <p class="modal-box-h1">Brand: ${brand}</p>
            <p class="modal-box-h1">Discription: ${discription}</p>
            <button class="modal-button"><a class="modal-button-a" href="#">Buy</a></button>
          </div>
        </div>
        <div class="detail-box"></div>
      </a>
    </div>
</div>
`;

      console.log(row);

      $(".modal").appendChild(row);
    }
  );
}
