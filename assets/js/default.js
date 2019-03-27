const data = {
  0: {
    src: "./assets/img/macbook-air.jpg",
    title: "Macbook Air",
    price: {
      new: "₹70,000",
      old: "₹85,000 "
    },
    delivery: {
      free: true,
      cost: "₹0"
    }
  }
};

const body = document.querySelector("#body");

showProducts();

//Now, showing up the products

function showProducts() {
  for (let i in data) {
    const product = data[i];
    body.innerHTML += `
        <div class="col-sm-12 col-lg-6 col-xl-4">
        <div class="card">
          <img src="${product.src}" alt='${product.title}' />
          <div class="card-body">
            <h4 class="card-title">
              <span class="title">${product.title}</span>
              <span class="cost"
                ><span class=" h5 red-text mr-auto">${product.price.new}</span>
                <s class="small-text">${product.price.old}</s></span
              >
            </h4>
            <div class="text-muted">Get it by <em>tomorrow</em></div>
            <div class="text-muted">
              ${
                product.delivery.free ? "FREE" : product.delivery.cost
              } delivery by <em>Shopping Corner</em>
            </div>
          </div>
          <div class=" card-footer">
            <div class="row">
              <a href="#!" class="btn btn-secondary  col-5"
                >Add to Cart &nbsp; &nbsp;<i class="fas fa-shopping-cart"></i>
              </a>
              <a href="#!" class="btn btn-primary  offset-2 col-5">
                Buy Now &nbsp; &nbsp;<i class="fas fa-bolt"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

console.log(body);
