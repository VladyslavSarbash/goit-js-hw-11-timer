export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(
        `${this.selector} .field [data-value='days']`
      ),
      hours: document.querySelector(
        `${this.selector} .field [data-value='hours']`
      ),
      mins: document.querySelector(
        `${this.selector} .field [data-value='mins']`
      ),
      secs: document.querySelector(
        `${this.selector} .field [data-value='secs']`
      ),
    };
  }

  timeIsNow() {
    const timeNow = this.targetDate - Date.now();

    const days = Math.floor(timeNow / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((timeNow % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeNow % (1000 * 60)) / 1000);

    this.textContentTimer({ days, hours, mins, secs });
  }

  textContentTimer({ days, hours, mins, secs }) {
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  }

  onStart() {
    setInterval(this.timeIsNow.bind(this), 1000);
  }
}

// const daysValueRef = document.querySelector("span[data-value='days']");
// const hoursValueRef = document.querySelector("span[data-value='hours']");
// const minsValueRef = document.querySelector("span[data-value='mins']");
// const secsValueRef = document.querySelector("span[data-value='secs']");

// function CountdownTimer({ selector, targetDate }) {
//   this.selector = selector;
//   this.targetDate = targetDate;
// }

// const countdownTimer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Aug 21, 2021'),
// });

// function timeIsNow() {
//   const timeNow = countdownTimer.targetDate - Date.now();

//   const days = Math.floor(timeNow / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (timeNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const mins = Math.floor((timeNow % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((timeNow % (1000 * 60)) / 1000);

//   textContentTimer({ days, hours, mins, secs });
// }

// function textContentTimer({ days, hours, mins, secs }) {
//   daysValueRef.textContent = days < 10 ? `0${days}` : days;
//   hoursValueRef.textContent = hours < 10 ? `0${hours}` : hours;
//   minsValueRef.textContent = mins < 10 ? `0${mins}` : mins;
//   secsValueRef.textContent = secs < 10 ? `0${secs}` : secs;
// }

// setInterval(timeIsNow, 1000);
