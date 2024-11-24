document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const box = document.querySelector(".box");
  const message = document.getElementById("message");
  const image = document.querySelector("img");
  const sticker = document.getElementById("sticker");
  const buttons = document.querySelector(".buttons");

  // Variables to track the button's evasion distance
  let isNoButtonClicked = false;

  // Function to move the "No" button away from the mouse pointer
  const moveNoButton = (e) => {
    if (isNoButtonClicked) return; // Only move if not clicked
    const noBtnRect = noBtn.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = noBtnRect.left + noBtnRect.width / 2 - mouseX;
    const deltaY = noBtnRect.top + noBtnRect.height / 2 - mouseY;

    // Apply pointer-events:none to make the button unclickable when it's evading
    noBtn.style.pointerEvents = "none";

    // Move the "No" button away from the pointer
    noBtn.style.transform = `translate(${deltaX / 2}px, ${deltaY / 2}px)`;
  };

  // Event listener for "No" button hover
  noBtn.addEventListener("mouseenter", () => {
    // Activate the mouse tracking when hovering over "No"
    document.addEventListener("mousemove", moveNoButton);
  });

  // Event listener for "No" button click
  noBtn.addEventListener("click", (e) => {
    // Disable the evasion on click
    isNoButtonClicked = true;
    document.removeEventListener("mousemove", moveNoButton);
    noBtn.style.pointerEvents = "auto"; // Allow clicks again after evasion ends
    noBtn.style.transform = "translate(0, 0)"; // Reset the position
  });

  // Event listener for "Yes" button click
  yesBtn.addEventListener("click", () => {
    // Change the content to the "Welcome" message
    message.textContent = "I Knew It!";
    // message.textContent = 'Welcome!';
    image.src = "images/3.gif";
    // sticker.style.display = 'none'; // Hide sticker
    buttons.style.display = "none"; // Hide buttons
  });
});
