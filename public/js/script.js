

//wait for Hiring button is clicked
const hiringRadio = document.getElementById('reasonH');
const hourlyRateDiv = document.getElementById("HourlyRateDiv");
const hourlyRate = document.getElementById("CmHourRate");

hiringRadio.addEventListener("change", function() {
  if(this.checked) {
    hourlyRateDiv.classList.remove("animate__flipOutX");
    hourlyRateDiv.style.display = "block";
    hourlyRateDiv.classList.add("animate__animated", "animate__flipInX");
    hourlyRate.removeAttribute("disabled");
  }
});

//if other contact me reason is selected
const other = document.querySelectorAll('input[name="reason"]:not(#reasonH)');
other.forEach(function(radio) {
  radio.addEventListener("change", function() {
    hourlyRateDiv.classList.add("animate__animated", "animate__flipOutX");
    setTimeout(function() {
      hourlyRateDiv.style.display = "none";
      hourlyRate.setAttribute("disabled", "true");
    }, 750);
  });
});
