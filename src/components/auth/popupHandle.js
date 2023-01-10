const popupShow = (popupDOM) => {
  popupDOM.current.classList.remove("opacity-0");
  popupDOM.current.classList.remove("-translate-x-[10%]");
  popupDOM.current.classList.add("-translate-x-[50%]");
  popupDOM.current.classList.add("opacity-100");
};

const popupHidden = (popupDOM) => {
  console.log(popupDOM);
  popupDOM.current.classList.remove("-translate-x-[50%]");
  popupDOM.current.classList.remove("opacity-100");
  popupDOM.current.classList.add("opacity-0");
  popupDOM.current.classList.add("-translate-x-[10%]");
};
const setBackgroundGreen = (popupDOM) => {
  popupDOM.current.classList.remove("bg-red-500");
  popupDOM.current.classList.add("bg-green-500");
};

const setBackgroundRed = (popupDOM) => {
  console.log(popupDOM);
  popupDOM.current.classList.remove("bg-green-500");
  popupDOM.current.classList.add("bg-red-500");
};

const handlePopup = (isWarning, pesan, popupDOM, messageDOM) => {
  messageDOM.current.innerHTML = pesan;
  isWarning ? setBackgroundRed(popupDOM) : setBackgroundGreen(popupDOM);
  popupShow(popupDOM);
};

export { handlePopup, popupHidden };
