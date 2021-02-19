
// subscribe form validation
let emailInput = document.querySelector(".emailInput");
  let warningText = document.querySelector(".warningText");
  let subscribeBtn = document.querySelector(".subscribeBtn");
  subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(emailInput.value == "") {
      warningText.style.display = "block";
    }else {
      console.log(emailInput.value);
      emailInput.value = "";
    }
    setTimeout(() => {
      warningText.style.display = "none";
    }, 3000);
  });