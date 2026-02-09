import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `
        <li>${name}</li>
    `;
  }

  el.innerHTML = products;
};

// check if we are in development mode and are developing in isolation/locally
if (process.env.NODE_ENV === "development") {
  // assumption that the container will not have an element with the below id, only our local html file will
  const el = document.querySelector("#dev-products");
  if (el) {
    // we are probably running in isolation and not through the container
    mount(el);
  }
}

export { mount };
