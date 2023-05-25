const endDateInput = document.getElementById("end-date");
const countdownDiv = document.getElementById("countdown");
Btn = document.getElementById('countIT');

const Counter = () => {
    const endDate = endDateInput.value;
    const targetDate = new Date(endDate).getTime();
  
    // Update the countdown every second
      const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Calculating time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      countdownDiv.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // Check if the countdown is finished
      let message = "Time to Go!"
      if (distance <= 0) {
        clearInterval(intervalId);
        countdownDiv.innerHTML = `<h3>Oya ${message}</h3>`;
              // Redirect to a new page
        //window.location.href = "https://google.com";
        alert("Time Up");
      }
    }, 1000); // Update every second
  }

BtnClick = () => {
    Btn.addEventListener("click", Counter);
}
document.addEventListener("DOMContentLoaded", BtnClick);
  