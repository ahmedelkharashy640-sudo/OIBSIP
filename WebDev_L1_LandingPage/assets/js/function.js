function openPopup(popupName) {
  let popupEle = document.querySelector(
    `.popup[data-popup-name="${popupName}"]`,
  );
  popupEle.classList.add("active");
  setTimeout(function () {
    popupEle.classList.add("show");
  }, 100);
}

function closePopup() {
  let popupEle = document.querySelector(".popup.active");
  popupEle.classList.remove("show");
  setTimeout(function () {
    popupEle.classList.remove("active");
  }, 400);
}