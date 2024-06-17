document.addEventListener("DOMContentLoaded", () => {
  const myRange = document.getElementById("mySlider");
  const valueRange = document.getElementById("valueSlider");
  const valuePage = document.getElementById("value-page");
  const valuePrice = document.getElementById("value-price");
  const switchBTN = document.getElementById("switchToggle");
  const contractYear = document.getElementById("contract");

  function mountPrice() {
    let currentValue = myRange.value;

    let color =
      "linear-gradient(90deg,rgb(165, 243, 235)" +
      currentValue / 2 +
      "%," +
      "rgb(205, 215, 238)" +
      currentValue / 2 +
      "%)";
    myRange.style.background = color;
    // valueRange.innerHTML = myRange.value;
    const priceView = currentValue * 0.16;

    valuePage.innerHTML = currentValue;
    valuePrice.innerHTML = priceView.toFixed(2);
  }

  function yearPrice() {
    let currentValue = myRange.value;

    let color =
      "linear-gradient(90deg,rgb(165, 243, 235)" +
      currentValue / 2 +
      "%," +
      "rgb(205, 215, 238)" +
      currentValue / 2 +
      "%)";
    myRange.style.background = color;
    // valueRange.innerHTML = myRange.value;
    const priceView = currentValue * 0.16 * 0.25 * 12;

    valuePage.innerHTML = currentValue * 12;
    valuePrice.innerHTML = priceView.toFixed(2);
  }
  mountPrice();
  document.addEventListener("mousemove", getValue);
  switchBTN.addEventListener("click", getValue);

  function getValue() {
    // Mendapatkan elemen checkbox berdasarkan ID

    // Memeriksa status checked
    if (switchBTN.checked) {
      let y = "/ year";
      contractYear.innerHTML = y;
      myRange.removeEventListener("mousemove", yearPrice);
      yearPrice();
    } else {
      contractYear.innerHTML = "/ mounth";
      myRange.removeEventListener("mousemove", mountPrice);
      mountPrice();
    }
  }
});
