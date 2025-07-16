const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  alert("Reservation successful!  \n-------------------------\n" +  JSON.stringify(formProps))
  reservationForm.reset();
});
