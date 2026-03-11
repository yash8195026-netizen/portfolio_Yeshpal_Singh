function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value != null && recommendation.value.trim() !== "") {
    // Show the popup
    showPopup(true);

    // Create new recommendation element
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Append to recommendations list
    document.getElementById("all_recommendations").appendChild(element);

    // Reset textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  let popup = document.getElementById('popup');
  if (bool) {
    popup.classList.add("show");   // fade-in
  } else {
    popup.classList.remove("show"); // fade-out
  }
}

// Animate profile_name on page load
window.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile_name");
  profile.classList.add("animate");
});

// Scroll-triggered fade-ins for other sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});