// Get the cart-item-price-final element
const cartItemPriceFinal = document.querySelector(".cart-item-price-final");

// Get the close img
const closeImg = document.getElementById("close_img");

const gsapFrom_Animation = (selector) => {
  gsap.from(selector, {
    opacity: 0,
    y: -100,
    duration: 0.25,
  });
};

// code for animating side bar
const manu = document.getElementById("manu");
let displayList = false;

const animateList = () => {
  // Get the ul with query selector
  const navLinks = document.querySelectorAll("nav ul");
  const timeline = gsap.timeline();

  if (!displayList) {
    timeline.to(navLinks, {
      opacity: 1,
      x: "translateX(100%)",
      duration: 0.5,
    });
    displayList = true;
  } else {
    timeline.to(navLinks, { opacity: 0, x: "-100%", duration: 0.5 });
    displayList = false;
  }
};
manu.addEventListener("click", () => {
  if (!displayList) {
    manu.src = "images/icon-close.svg";
  } else {
    manu.src = "images/icon-menu.svg";
  }
  animateList();
});

// Code for ++ -- the product quantity

// Get the productQuantity element
const productQuantityInput = document.getElementById("quantity-input");
// Get quantity-decrease and increase elements
const quantityDecrease = document.querySelector(".quantity-decrease");
const quantityIncrease = document.querySelector(".quantity-increase");
let productQuantity = 0;
const updateQuantity = (e) => {
  const isIncrement = e.target.dataset.increment;
  if (isIncrement) {
    productQuantity++;
    productQuantityInput.value = productQuantity;
  } else {
    if (productQuantityInput.value <= 0) return;
    productQuantity--;
    productQuantityInput.value = productQuantity;
  }
};

quantityDecrease.addEventListener("click", updateQuantity);
quantityIncrease.addEventListener("click", updateQuantity);

// code for diplaying and hiding the cart box

// Get the cart img
const cartImg = document.getElementById("cart-img");

// Get the span element with id cart_quantity
const cartQuantitySpan = document.getElementById("cart_quantity");
// getting cart_box
const cart_box = document.querySelector(".cart-box");

cartImg.addEventListener("click", () => {
  cart_box.classList.toggle("show");
  gsapFrom_Animation(cart_box);
  cartQuantitySpan.style.display = "none";
  cartProduct_quantity = 0;
});

// code for updating hero img on clicking left and right arrow

// Get the product-hero-img of mobile
const productHeroImg = document.querySelector(".product-hero-img");

// Get the btn with navigation-right
const navigationRightBtn = document.querySelector(".navigation-right");

// Get the btn with navigation-left
const navigationLeftBtn = document.querySelector(".navigation-left");

let currentDesignImg = 1;

const updateHeroImg_mobile = (evt) => {
  const isDisplay_Next_img = evt.target.dataset.nextimg;
  if (isDisplay_Next_img) {
    if (currentDesignImg >= 4) currentDesignImg = 0;
    currentDesignImg++;
    productHeroImg.src = `images/image-product-${currentDesignImg}.jpg`;
  } else {
    if (currentDesignImg <= 1) currentDesignImg = 5;
    currentDesignImg--;
    productHeroImg.src = `images/image-product-${currentDesignImg}.jpg`;
  }
  gsapFrom_Animation(productHeroImg);
};

navigationRightBtn.addEventListener("click", updateHeroImg_mobile);
navigationLeftBtn.addEventListener("click", updateHeroImg_mobile);

// code for displaying the hero img based on the thumbnil click

// Get all product-thumbnails imgs
const productThumbnailImgs = document.querySelectorAll(
  ".product-thumbnails1 img"
);
const desktopHero_img = document.querySelector(".desktopHero_img");

// function for updating heroImgs

const updateHeroImg_Desktop = (array, img) => {
  // first removing active classes from the all thumbnail_Imgs
  array.forEach((img) => img.classList.remove("active"));

  // than adding active class on click img
  img.classList.add("active");
};

productThumbnailImgs.forEach((img, index, array) => {
  img.addEventListener("click", () => {
    updateHeroImg_Desktop(array, img);
    desktopHero_img.src = `images/image-product-${index + 1}.jpg`;
    gsapFrom_Animation(desktopHero_img);
  });
});

// code for displaying upper layer Desing on desktop

const product_Upper_Layer = document.querySelector(".product-image-container");

const transparent_bg_black = document.querySelector(".transparent-bg-black");

desktopHero_img.addEventListener("click", () => {
  product_Upper_Layer.style.display = "block";
  productHeroImg.src = desktopHero_img.src;
  transparent_bg_black.style.display = "block";
  gsapFrom_Animation(product_Upper_Layer);
});

// code for updating product_Upper_Layer_hero img based on the thumbnail

const product_Upper_Layer_thumbnails = document.querySelectorAll(
  ".upper_layer img"
);

product_Upper_Layer_thumbnails.forEach((img, index, array) => {
  img.addEventListener("click", () => {
    updateHeroImg_Desktop(array, img);
    productHeroImg.src = `images/image-product-${index + 1}.jpg`;
    gsapFrom_Animation(productHeroImg);
  });
});

// code for hiding upper layer desing

const close_img = document.getElementById("close_img");

close_img.onclick = (evt) => {
  evt.target.parentElement.style.display = "none";
  transparent_bg_black.style.display = "none";
  desktopHero_img.src = productHeroImg.src;
};

// code for hiding cart-box on loosing focus

document.addEventListener("click", (e) => {
  if (
    cart_box.classList.contains("show") &&
    !cartImg.contains(e.target) &&
    !cart_box.contains(e.target) &&
    !e.target.matches("#deleteCartItem")
  ) {
    cart_box.classList.remove("show");
  }
});

// code for adding product details in cart box and updating quantity span

const updateCart_box = (cart_product_info_wrapper, productQuantityInput) => {
  document.querySelector(".cart-empty").style.display = "none";
  document.querySelector(".cart-box-btn").style.display = "block";
  // Create the main cart item div
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item", "flex_x_center");

  // Create the image element
  const cartItemImage = document.createElement("img");
  cartItemImage.src = "images/image-product-1-thumbnail.jpg";
  cartItemImage.alt = "Product image";
  cartItemImage.classList.add("cart-item-image");

  // Create the cart item details div
  const cartItemDetails = document.createElement("div");
  cartItemDetails.classList.add("cart-item-details");

  // Create the cart item description paragraph
  const cartItemDescription = document.createElement("p");
  cartItemDescription.classList.add("cart-item-description");
  cartItemDescription.textContent = "Fall Limited Edition Sneakers";

  // Create the cart item price div
  const cartItemPrice = document.createElement("div");
  cartItemPrice.classList.add("cart-item-price");

  // Create the cart item price original span
  const cartItemPriceOriginal = document.createElement("span");
  cartItemPriceOriginal.classList.add("cart-item-price-original");
  cartItemPriceOriginal.textContent = `$125.00 x ${productQuantityInput.value}`;

  // Create the cart item price final span
  const cartItemPriceFinal = document.createElement("span");
  cartItemPriceFinal.classList.add("cart-item-price-final");
  cartItemPriceFinal.textContent = ` $${(
    productQuantityInput.value * 125.0
  ).toFixed(2)}`;

  // Create the delete cart item image
  const deleteCartItem = document.createElement("img");
  deleteCartItem.src = "images/icon-delete.svg";
  deleteCartItem.alt = "cart";
  deleteCartItem.classList.add("transition", "pointer");
  deleteCartItem.id = "deleteCartItem";

  // Build the nested structure
  cartItemPrice.appendChild(cartItemPriceOriginal);
  cartItemPrice.appendChild(cartItemPriceFinal);
  cartItemDetails.appendChild(cartItemDescription);
  cartItemDetails.appendChild(cartItemPrice);
  cartItemDiv.appendChild(cartItemImage);
  cartItemDiv.appendChild(cartItemDetails);
  cartItemDiv.appendChild(deleteCartItem);

  cart_product_info_wrapper.appendChild(cartItemDiv);
};
// Get the addCart button
const addToCartBtn = document.querySelector(".add-to-cart");
let cartProduct_quantity = 0;
addToCartBtn.addEventListener("click", () => {
  const cart_product_info_wrapper = document.querySelector(
    ".cart_procuct_info_wrapper"
  );
  if (productQuantity <= 0) return;
  else {
    cartQuantitySpan.style.display = "flex";
    cartProduct_quantity++;
    cartQuantitySpan.innerText = cartProduct_quantity;
    updateCart_box(cart_product_info_wrapper, productQuantityInput);
  }
});

// code for deleting the cart item from cart box
const cart_procuct_info_wrapper = document.querySelector(
  ".cart_procuct_info_wrapper"
);

cart_procuct_info_wrapper.addEventListener("click", (evt) => {
  if (evt.target.matches("#deleteCartItem")) {
    evt.target.parentElement.remove();
    if (cart_procuct_info_wrapper.firstElementChild) {
      document.querySelector(".cart-empty").style.display = "none";
      cart_procuct_info_wrapper.nextElementSibling.style.display = "block";
    } else {
      document.querySelector(".cart-empty").style.display = "block";
      cart_procuct_info_wrapper.nextElementSibling.style.display = "none";
    }
  }
});
