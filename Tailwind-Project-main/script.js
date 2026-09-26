// Function to show/hide the booking modal
function toggleModal(show) {
  const modal = document.getElementById("bookingModal");
  if (show) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

// Window scroll listener for navbar background/padding change effects
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add(
      "scrolled",
      "shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
      "py-3.5"
    );
    nav.classList.remove("py-6");
  } else {
    nav.classList.remove(
      "scrolled",
      "shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
      "py-3.5"
    );
    nav.classList.add("py-6");
  }
});