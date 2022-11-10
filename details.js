const url = new URLSearchParams(window.location.search);
const productId = url.get("peoductId");

async function getProduct() {
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
  return product;
}

function renderProduct(product) {
  document.querySelector("#product-details").innerHTML = `
      <h2 class="display-4">${product.name}</h2>
      <p>${product.description}</p>
      <h3 class="mb-3">$USD${product.price}<h3>
      <h6 class="pl-2 py-3 bg-light">Server Details</h6>
      <ul class="list-group list-group-flush mb-4">
        <li class="list-group-item pl-2"><b>id: </b>${product._id}</li>
        <li class="list-group-item pl-2"><b>createdAt: </b>${product.createdAt}</li>
        <li class="list-group-item pl-2"><b>updatedAt: </b>${product.updatedAt}</li>
      </ul>`;
}

window.onload = async () => {
  const product = await getProduct();
  renderProduct(product);
};

async function onDelete() {
  //try {

  // if (confirm("Do you really want to delete this event?")) {
  const options = { method: "DELETE" };
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/agenda/${appointmentId}`,
    options
  );
  if (response.ok) {
    window.location.assign("index.html");
  } else {
    alert("Error while deleting!");
  }
  // }

  //   } catch (error) {
  //     alert(`Some erorr occured: ${error}`)
  //   }
}

function onEdit() {
  window.location.assign(`backoffice.html?appointmentId=${appointmentId}`);
}
