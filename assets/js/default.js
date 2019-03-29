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
    },
    desc: {
      features: [
        "All new 2017 Apple MacBook Air",
        "1.8GHz Intel Core i5 processor",
        "8GB LPDDR3 RAM, 128GB Solid State hard drive",
        "13.3-inch screen, Intel HD Graphics 6000",
        "MacOS Sierra operating system",
        "1.35kg laptop",
        "1 year warranty from manufacturer from date of purchase",
        "1440x900 pixels per inch with support for millions of colors, 720p FaceTime HD camera"
      ],
      purchases: "12323"
    },
    cart: false
  },
  1: {
    src: "./assets/img/macbook-pro-13.jpg",
    title: "Apple Macbook Pro - 13 inch",
    price: {
      new: "₹104,990.00",
      old: "₹114,900.00 "
    },
    delivery: {
      free: true,
      cost: "₹0"
    },
    desc: {
      features: [
        "Stunning 13.3-inch Retina display",
        "Touch ID",
        "Dual-core 8th-generation Intel Core i5 processor with Intel UHD Graphics 617",
        "Fast SSD storage",
        "8GB memory",
        "Stereo speakers with wider stereo sound",
        "1 year warranty from manufacturer from date of purchase",
        "Two Thunderbolt 3 (USB-C) ports"
      ],
      purchases: "1833"
    },
    cart: false
  },
  2: {
    src: "./assets/img/macbook-pro.jpg",
    title: "Apple Macbook Pro - 15 inch",
    price: {
      new: "₹231,900.00",
      old: "₹264,900.00 "
    },
    delivery: {
      free: true,
      cost: "₹0"
    },
    desc: {
      features: [
        "6-core 8th-generation Intel Core i7 processor",
        "Brilliant Retina display with True Tone technology",
        "Touch Bar and Touch ID",
        "Radeon Pro 555X or 560X graphics with 4GB of video memory",
        "Ultrafast SSD",
        "Intel UHD Graphics 630",
        "1 year warranty from manufacturer from date of purchase",
        "Four Thunderbolt 3 (USB-C) ports"
      ],
      purchases: "1433"
    },
    cart: false
  }
};

let cart = [];

const body = document.querySelector("#body");
const cartCount = document.querySelector("#cart-count");

//Intializing the webpage

showProducts();
showCartCount();

function showCartCount() {
  cartCount.textContent = cart.length;
}

//Now, showing up the products
function showProducts(first = true) {
  if (!first) {
    body.innerHTML = "";
  }
  for (let i in data) {
    const product = data[i];
    if (!product.cart) {
      body.innerHTML += `
        <div class="col-sm-12 col-lg-6 col-xl-4 ${i == 0 ? "first-col" : ""}">
        <div class="card " >
          <img src="${product.src}" alt='${product.title}' />
          <div class="card-body">
            <h4 class="card-title">
              <span class="title" data-toggle='modal' data-target='#card${i}'>${
        product.title
      }</span>
            </h4>
            <div class="cost-cont"><span class="cost"
            ><span class=" h5 red-text mr-auto">${product.price.new}</span>
            <s class="small-text">${product.price.old}</s></span
          ></div>
            <div class="text-muted">Get it by <em>tomorrow</em></div>
            <div class="text-muted">
              ${
                product.delivery.free ? "FREE" : product.delivery.cost
              } delivery by <em>Shopping Corner</em>
            </div>
          </div>
          <div class=" card-footer">
            <div class="row">
              <button href="#!" class="btn btn-secondary  col-5 add-cart" data-id=${i}
                >Add to Cart &nbsp; &nbsp;<i class="fas fa-shopping-cart"></i>
              </button>
              <button href="#!" class="btn btn-primary  offset-2 col-5" data-toggle="modal" data-target="#buy-now">
                Buy Now &nbsp; &nbsp;<i class="fas fa-bolt"></i
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="card${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="card${i}Label">${product.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>Product Highlights</h4>
        <ul>
              <li>${product.desc.features[0]}</li>
              <li>${product.desc.features[1]}</li>
              <li>${product.desc.features[2]}</li>
              <li>${product.desc.features[3]}</li>
              <li>${product.desc.features[4]}</li>
              <li>${product.desc.features[5]}</li>
              <li>${product.desc.features[6]}</li>
              <li>${product.desc.features[7]}</li>
        </ul>
        <p class="text-muted">Total Purchases: ${product.desc.purchases} </p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="buy-now" tabindex="-1" role="dialog" aria-labelledby='buy-now' aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Buy Now - ${
        product.title
      }</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      This will be the buy now modal, where we will ask for clients required info for delivery and taking the charges etc.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>

        `;
    }
  }

  if (body.innerHTML == "") {
    body.innerHTML = "Sorry, no more products";
  }

  AddCartListener();
  showCartCount();
}

function AddCartListener() {
  const cartBtns = document.querySelectorAll(".add-cart");
  for (let i of cartBtns) {
    i.addEventListener("click", addToCart);
  }
}

function addToCart(e) {
  let id = "",
    btn = "";
  if (e.target.className.includes("btn")) {
    btn = e.target;
    id = e.target.getAttribute("data-id");
  } else {
    id = e.target.parentElement.getAttribute("data-id");
    btn = e.target.parentElement;
  }
  //Now, just adding corresponding item to cart
  btn.textContent = "Adding...";
  btn.disabled = true;
  setTimeout(() => {
    if (!cart.includes(data[id])) {
      cart.push(data[id]);
    }
    data[id].cart = true;
    showProducts(false);
  }, 1000);
}

//Adding events handler to cart

const cartNav = document.querySelector("#cartNav");
cartNav.addEventListener("click", setCartValues);

function setCartValues(e) {
  const cartBody = document.querySelector("#cart-body");
  if (cart.length <= 0) {
    cartBody.innerHTML = `<li class="list-group-item">No items in Cart now</li>`;
  } else {
    cartBody.innerHTML = "";
    for (let i of cart) {
      cartBody.innerHTML += `<li class="list-group-item cart-item">
            <span href="#!" data-toggle='modal' data-target='#card${Object.values(
              data
            ).indexOf(i)}' class="red-text-hover">${i.title}</span>
            <span class="ml-auto" ><a class="close" data-title='${
              i.title
            }'>&times;</a></span>
        
        </li>`;
    }
    // console.log(Object.values(data));
    deleteCartItem();
  }
}

function deleteCartItem() {
  const cartItem = document.querySelectorAll(".cart-item");
  for (let i of cartItem) {
    i.addEventListener("click", deleteCard);
  }
}

function deleteCard(e) {
  const close = e.target;
  const title = close.getAttribute("data-title");
  let i = -1;
  if (title) {
    //Now, deleting the entry in the cart
    cart = cart.filter((item, index) => {
      if (item.title === title) {
        i = index;
      }
      return item.title !== title;
    });
    data[i].cart = false;

    //Now, re-rendering everything
    setCartValues();
    showCartCount();
    showProducts(false);
  }
}
