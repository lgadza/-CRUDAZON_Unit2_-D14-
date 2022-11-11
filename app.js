//headers

// const key =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWUzY2Q0YmUzZDAwMTU4NDVmZDAiLCJpYXQiOjE2NjgwODMyNjAsImV4cCI6MTY2OTI5Mjg2MH0.uNsrqEp_HPgrPhAwjziunQVeY6iQ11AA-FDwQ5LlOaI";

// async function getInfo() {
//   const response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/product/",
//     {
//       headers: {
//         Authorization: `Bearer ${key}`,
//       },
//     }
//   );
//   const data = await response.json();
//   renderProducts(data);
//   return data;
// }
async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgwODQ3NTEsImV4cCI6MTY2OTI5NDM1MX0.DSo8cqtcMsmVYIbM2evKPLJZJxiSMN-4OkRTChrtfN0",
      },
    }
  );

  const products = await response.json();
  renderProducts(products);

  return products;
}
console.log(getProducts);

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
  const products = await getProducts();
  renderProducts(products);
};
