import CountdownTimer from './class.js';
// import templateString from './templateString.js';

const refs = {
  stop: document.querySelector('#stop'),
  section: document.querySelector('.section_timer'),
  form: document.querySelector('form'),
};

let timerId = null;

function createTimer(event) {
  event.preventDefault();
  timerId += 1;
  const getValueForm = formDataValue()
  refs.section.insertAdjacentHTML(
    'beforeend',
    `<div class="timer timer-${timerId}">
  <div class="field">
    <span class="value" data-value="days">00</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">00</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">00</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">00</span>
    <span class="label">Seconds</span>
  </div>
</div>`
  );
  onStartTimer(getValueForm);
}

function formDataValue() {
  const formData = new FormData(refs.form);
  const getValueForm = {
    day: +formData.get('day'),
    month: +formData.get('month'),
    year: +formData.get('year'),
  };
  return getValueForm;
}

function cleanTimers(event) {
  event.preventDefault();
  refs.section.innerHTML = '';
}

function targetTimer(getValueForm) {
  const newTimer = createNewCountdownTimer(timerId, getValueForm);
  const countdownTimer = new CountdownTimer(newTimer);

  return countdownTimer;
}

function createNewCountdownTimer(timerId, { day, month, year }) {
  return {
    selector: `.timer-${timerId}`,
    targetDate: new Date(year, month - 1, day),
  };
}

function onStartTimer(getValueForm) {
  const countdownTimer = targetTimer(getValueForm);
  countdownTimer.onStart();
}

refs.form.addEventListener('submit', createTimer);
refs.stop.addEventListener('click', cleanTimers);
