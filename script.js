const buttonEl = document.querySelector("button");
const statusEl = document.querySelector(".status");
buttonEl.addEventListener("click", async () => {
  try {
    await navigator.share({
      title: "Test",
      text: "This is a test share",
      url: "https://www.google.com/",
    });
    statusEl.textContent = "Data was shared successfully";
  } catch (err) {
    statusEl.textContent = "web share failed July 2024"
  }
});