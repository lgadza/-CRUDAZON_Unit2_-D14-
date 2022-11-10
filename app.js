//headers
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQwZmQ0YmUzZDAwMTU4NDVmZWQiLCJpYXQiOjE2NjgwODQ3NTEsImV4cCI6MTY2OTI5NDM1MX0.DSo8cqtcMsmVYIbM2evKPLJZJxiSMN-4OkRTChrtfN0",
  },
};
async function getProduct() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/",
    options
  );
  const products = await response.json();
  return products;
}
console.log(getProduct());
