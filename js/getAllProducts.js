async function getAllProducts() {
  let data;
  try {
    return data = await fetch("http://localhost:3456/allproducts", {
      method: "GET",
      body: JSON.stringify(data),
    })
      .then(resp => resp.json())
      .then(data => JSON.stringify(data));
  } catch (err) {
    return err.message;
  }
}
