/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
    var customAmountInput = document.getElementById('custom_amount');
    var donationButtons = document.querySelectorAll('.donation-option');

    donationButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            donationButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });

    customAmountInput.addEventListener('focus', function () {
        donationButtons.forEach(function (button) {
            button.classList.remove('active');
        });
    });

    customAmountInput.addEventListener('blur', function () {
        if (customAmountInput.value.trim() !== '') {
            customAmountInput.value = '$' + customAmountInput.value;
        }
    });
});

function popup(){
    alert("Thank you for donating today!");
    window.location.reload();
}