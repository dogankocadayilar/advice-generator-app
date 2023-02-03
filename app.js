const adviceText = document.querySelector(".advice-text");
const adviceButton = document.querySelector(".advice-button");
const adviceId = document.querySelector(".id");

adviceButton.addEventListener("click", handleClick);

function handleClick() {
  makeApiCall();
  adviceButton.disabled = true;

  setTimeout(() => {
    adviceButton.disabled = false;
  }, 1500);
}

function makeApiCall() {
  fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then((data) => {
      const { advice, id } = data.slip;
      if (adviceId.textContent === id.toString()) return;
      adviceText.textContent = advice;
      adviceId.textContent = id;
    })
    .catch((e) => console.error(e))
    .finally(() => (loading = null));
}
