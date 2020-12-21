const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]')
}

const targetDate = new Date('Jan 5, 2021 15:37:25').getTime()

const timer = setInterval(function() {

  let now = new Date().getTime();

  const period = targetDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(period / (1000 * 60 * 60 * 24));
  const hours = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((period % (1000 * 60)) / 1000);

  // Display the result in the element
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.seconds.textContent = secs;

  // If the count down is finished, write some text
  if (period < 0) {
    clearInterval(timer);
    document.getElementById("timer-1").innerHTML = "EXPIRED";
  }
}, 1000);


// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jan 5, 2021 15:37:25').getTime()
// });