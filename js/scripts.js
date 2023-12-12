/*!
 * Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function () {
  var customAmountInput = document.getElementById("custom_amount");
  var donationButtons = document.querySelectorAll(".donation-option");

  donationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      donationButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });

  customAmountInput.addEventListener("focus", function () {
    donationButtons.forEach(function (button) {
      button.classList.remove("active");
    });
  });

  customAmountInput.addEventListener("blur", function () {
    if (customAmountInput.value.trim() !== "") {
      customAmountInput.value = "$" + customAmountInput.value;
    }
  });
});

function popup() {
  alert("Thank you for donating today!");
  window.location.reload();
}

// Function to generate a formatted timestamp
function timestamp() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate;
}

// Function to update the timestamp in the specified container
function updateTimestamp() {
    const timestampContainer = document.querySelector('.footer-timestamp');
    if (timestampContainer) {
        timestampContainer.textContent = `Timestamp: ${timestamp()}`;
    }
}

// Call the updateTimestamp function when the page loads
document.addEventListener('DOMContentLoaded', updateTimestamp);

// Slide
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const images = [
      '/img/caglar-oskay-pYHFDv6vI-o-unsplash.jpg',
      '/img/roth-melinda-3u_XtLFnGhM-unsplash.jpg',
      '/img/raja-tilkian-tnUcI53e7zA-unsplash.jpg',
      '/img/vince-fleming-aZVpxRydiJk-unsplash.jpg',
      '/img/junior-reis-0xFEL_vDU5I-unsplash.jpg',
      '/img/stephen-baker-c45uIMh1RBo-unsplash.jpg',
      'img/bruce-warrington--nB1vV_7A-4-unsplash.jpg',
    ];
  
    function showSlides() {
        let backgroundImage = document.getElementById('backgroundImage');
    
        // Fade out
        backgroundImage.style.opacity = 0;
    
        setTimeout(function () {
          backgroundImage.style.backgroundImage = `url('${images[slideIndex]}')`;
    
          // Fade in
          backgroundImage.style.opacity = 1;
    
          slideIndex = (slideIndex + 1) % images.length;
        }, 500); // Wait for the transition to complete
    
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
      }
    
      // Call the showSlides function when the page loads
      showSlides();
    });
  