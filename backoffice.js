// backOffice

const url = new URLSearchParams(window.location.search);
const productId = url.get("productId");
console.log(productId);
window.onload = async () => {
  if (productId) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgwODQ3NTEsImV4cCI6MTY2OTI5NDM1MX0.DSo8cqtcMsmVYIbM2evKPLJZJxiSMN-4OkRTChrtfN0",
        },
      }
    );
    const product = await response.json();

    let addStokeButton = document.querySelector("#add-button");
    addStokeButton.innerText = "Edit Event";
    addStokeButton.classList.remove("btn-primary");
    addStokeButton.classList.add("btn-success");

    document.querySelector("#product-name").value = product.name;
    document.querySelector("#product-description").value = product.description;
    document.querySelector("#product-price").value = product.price;
  }
};

async function onFormSubmit(event) {
  event.preventDefault();

  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    price: document.querySelector("#product-price").value,
  };

  const options = {
    method: productId ? "PUT" : "POST",

    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const endpoint = productId
      ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
      : "https://striveschool-api.herokuapp.com/api/product/";

    const response = await fetch(endpoint, options, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgwODQ3NTEsImV4cCI6MTY2OTI5NDM1MX0.DSo8cqtcMsmVYIbM2evKPLJZJxiSMN-4OkRTChrtfN0",
      },
    });
    if (response.ok) {
      window.location.assign("index.html");
    }
  } catch (error) {
    console.error(error);
  }
}
