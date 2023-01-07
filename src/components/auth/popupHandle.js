let popup;
let message;

document.addEventListener("readystatechange", function () {
  popup = document.querySelector("#popupAuth");
  message = document.querySelector("#message");
});

const popupShow = () => {
  console.log("popupshow berjalan");

  popup.classList.remove("opacity-0");
  popup.classList.remove("-translate-x-[10%]");
  popup.classList.add("-translate-x-[50%]");
  popup.classList.add("opacity-100");
};

const popupHidden = () => {
  popup.classList.remove("-translate-x-[50%]");
  popup.classList.remove("opacity-100");
  popup.classList.add("opacity-0");
  popup.classList.add("-translate-x-[10%]");
};

const handlePopup = (isWarning, pesan) => {
  const setBackgroundGreen = () => {
    popup.classList.remove("bg-red-500");
    popup.classList.add("bg-green-500");
  };

  const setBackgroundRed = () => {
    popup.classList.remove("bg-green-500");
    popup.classList.add("bg-red-500");
  };

  console.log(message);

  message.innerHTML = pesan;
  isWarning ? setBackgroundRed() : setBackgroundGreen();
  popupShow();
};

export { handlePopup, popupHidden };
