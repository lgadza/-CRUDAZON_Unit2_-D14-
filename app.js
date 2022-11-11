//headers

async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product",
    {
      // method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    }
  );

  const products = await response.json();

  // console.log(products);
  return products;
}

function renderProducts(arrOfProducts) {
  console.log(arrOfProducts);

  let list = document.querySelector(".list-group");

  arrOfProducts.forEach(({ name, price, _id }, index) => {
    const productLi = document.createElement("li");
    productLi.classList.add("list-group-item");
    productLi.innerHTML = `<div class="row px-3 align-items-center">
                                     <div class="mr-1 col row justify-content-between align-items-center">
                                       <div>${index + 1} - ${name}</div>
                                       <div class="badge badge-dark">${price}€</div>
                                     </div>
                                     <a class"col" href="details.html?productId=${_id}">VIEW</a>
                                   </div>`;

    list.appendChild(productLi);
  });
}

window.onload = async () => {
  const products = await getProducts();
  renderProducts(products);
};
