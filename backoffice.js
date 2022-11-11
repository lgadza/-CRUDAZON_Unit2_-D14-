// backOffice

const url = new URLSearchParams(window.location.search);
const productId = url.get("productId");
// console.log(productId);
window.onload = async () => {
  if (productId) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${productId}`,
      {
        // method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
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

async function onFormSubmit(product) {
  product.preventDefault();

  const newProduct = {
    name: document.querySelector("#product-name").value,
    description: document.querySelector("#product-description").value,
    price: document.querySelector("#product-price").value,
  };
  // console.log(newProduct);
  const options = {
    method: productId ? "PUT" : "POST",

    // method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
    },

    body: JSON.stringify(newProduct),
  };

  try {
    const endpoint = productId
      ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
      : "https://striveschool-api.herokuapp.com/api/product/";

    const response = await fetch(endpoint, options, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgxMzYyMjMsImV4cCI6MTY2OTM0NTgyM30.VUS9Kr-_8IzdCkkChoj2bIHL51bsb4NkyqT8De780Ec",
      },
    });
    if (response.ok) {
      window.location.assign("index.html");
    }
  } catch (error) {
    console.error(error);
  }
}

//NEw

// const params = new URLSearchParams(window.location.search);
// const productId = params.get("productId");

// window.onload = async () => {
//   if (productId) {
//     // We are editing - let's get the event to edit,
//     // and prefill the form with its info.
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/product/${productId}`
//     );
//     const product = await response.json();

//     let submitButton = document.querySelector("#add-button");
//     submitButton.innerText = "Edit Event";
//     submitButton.classList.remove("btn-primary");
//     submitButton.classList.add("btn-success");

//     document.querySelector("#product-name").value = product.name;
//     document.querySelector("#product-description").value = product.description;
//     document.querySelector("#product-price").value = product.price;

//     // time looks like this: "2022-08-18T11:16:00.000Z"
//     // The timezone info will break the input field, so we don't need .000Z
//     // time.split('.') . -----> ['2022-08-18T11:16:00', '000Z']
//     // time.split('.')[0] -----> '2022-08-18T11:16:00'
//     // document.querySelector("#event-time").value = product.time.split(".")[0];
//   }
// };

// async function onFormSubmit(product) {
//   // We call this to avoid the default action for the event.
//   // In this case, this is a submit event, the default action is
//   // the refresh of the page.
//   // We dont't want that...
//   product.preventDefault();

//   const newProduct = {
//     name: document.querySelector("#product-name").value,
//     description: document.querySelector("#product-description").value,
//     price: document.querySelector("#product-price").value,
//     // time: document.querySelector("#event-time").value,
//   };

//   const options = {
//     method: productId ? "PUT" : "POST",
//     // BODY NEEDS TO BE A STRING, BECAUSE THIS IS HTTP,
//     // so we convert the object into a string, JSON string
//     body: JSON.stringify(newEvent),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     // JavaScript please TRY to execute this block of code...
//     // Whenever an erorr presents inside here, we will move directly
//     // to the catch block, and we will execute the code there.

//     const endpoint = productId
//       ? `https://striveschool-api.herokuapp.com/api/product/${productId}`
//       : "https://striveschool-api.herokuapp.com/api/product/";

//     const response = await fetch(endpoint, options);
//     // If there is an error here, when fetching...
//     // This code will not go forward -> we jump to the catch block.

//     if (response.ok) {
//       // Because we want to do this only if the response code is 200 OK
//       alert(
//         productId
//           ? "Appointment edited successfully!"
//           : "Appointment created successfully!"
//       );
//     } else {
//       throw new Error("ERROR WHILE EXECUTING THE TRY BLOCK!");
//     }
//   } catch (error) {
//     // Any error will be catched here.
//     console.error(error);
//   }
// }
