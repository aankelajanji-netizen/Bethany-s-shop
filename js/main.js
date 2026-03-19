function PlaceOrder(){
    const alertBox = document.querySelector('.alert');
    alertBox.classList.remove('d-none');

      setTimeout(() => {
   document.querySelector('.alert').classList.add('d-none');
  }, 3000); // 3000 ms = 3 seconds
}

function formValidate(){
    let email = document.getElementById("exampleInputEmail").value;
    let address = document.getElementById("exampleInputAddres").value;

    if(email == "" || address == ""){
        alert("Plotesoni fushat required");
    }
    else{
         alert("Email u dergua me sukeses");
    }
}
let cartCount = 0;
function addToCart() {
      cartCount++;
      document.getElementById("cart-count").innerText = cartCount;
    }

    function confirmOrder() {

    let btn = document.getElementById("confirm-btn");
    let loading = document.getElementById("loading-text");
    let success = document.getElementById("success-text");
    if (cartCount === 0) {
        alert("Shporta eshte bosh!");
        return;
    }
    btn.disabled = true;
    loading.classList.remove("d-none");
    setTimeout(() => {

        loading.classList.add("d-none");
        success.classList.remove("d-none");
        cartCount = 0;
        document.getElementById("cart-count").innerText = 0;

    }, 2000);
}

function viewOrder(id) {
  window.location.href = "orderdetails.html?orderId=" + id;
}

  let params = new URLSearchParams(window.location.search);
  let orderId = params.get("orderId");
  document.getElementById("order-id").innerText = orderId;

 function goBack() {
    window.location.href = "porosite.html"; 
  } 
