const daysValueRef = document.querySelector("span[data-value='days']");
const hoursValueRef = document.querySelector("span[data-value='hours']");
const minsValueRef = document.querySelector("span[data-value='mins']");
const secsValueRef = document.querySelector("span[data-value='secs']");

function CountdownTimer({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 21, 2021'),
});

function timeIsNow() {
  const timeNow = Date.now() - countdownTimer.targetDate;

  const days = Math.floor(timeNow / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeNow % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeNow % (1000 * 60)) / 1000);

  textContentTimer({days, hours, mins, secs})
}

function textContentTimer({days, hours, mins, secs}) {
    daysValueRef.textContent = -days < 10 ? `0${-days}` : -days;
    hoursValueRef.textContent = -hours < 10 ? `0${-hours}` : -hours;
    minsValueRef.textContent = -mins < 10 ? `0${-mins}` : -mins;
    secsValueRef.textContent = -secs < 10 ? `0${-secs}` : -secs;
}

setInterval(timeIsNow, 1000)
