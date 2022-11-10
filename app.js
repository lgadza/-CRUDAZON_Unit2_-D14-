//headers

async function getProduct() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgwODQ3NTEsImV4cCI6MTY2OTI5NDM1MX0.DSo8cqtcMsmVYIbM2evKPLJZJxiSMN-4OkRTChrtfN0",
      },
    }
  );
  const products = await response.json();
  return products;
}
function renderProducts(arrOfProducts) {
  let list = document.querySelector(".list-group");

  arrOfProducts.forEach(({ name, brand, link }, index) => {
    const appointmentLi = document.createElement("li");
    appointmentLi.classList.add("list-group-item");
    appointmentLi.innerHTML = `<div class="row px-3 align-items-center">
                                     <div class="mr-1 col row justify-content-between align-items-center">
                                       <div>${index + 1} - ${name}</div>
                                       <div class="badge badge-dark">${brand}€</div>
                                     </div>
                                     <a class"col" href="details.html?productId=${link}">VIEW</a>
                                   </div>`;

    list.appendChild(appointmentLi);
  });
}

window.onload = async () => {
  const products = await getProduct();
  renderProducts(products);
};
