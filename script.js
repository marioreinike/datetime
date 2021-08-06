timeElem = document.getElementById('time');
dateElem = document.getElementById('date');

function getTime() {
  const date = new Date();
  return {
    time: [date.getHours(), date.getMinutes(), date.getSeconds()]
            .map((num) => ('0' + num.toString()).slice(-2)),
    date: date.toDateString(),
  }
}

function copyEpoch() {
  const epoch = Math.floor(Date.now() / 1000);
  const textInput = document.getElementById('input');
  textInput.value = `${epoch}`;
  textInput.select();
  textInput.setSelectionRange(0, 99999);
  msg = document.execCommand("copy");
  textInput.value = '✔️'
}

setInterval(() => {
  const { time, date } = getTime();
  timeElem.innerText = `${time[0]}:${time[1]}:${time[2]}`;
  dateElem.innerText = date;
}, 1000);

document.getElementById('copy-epoch').addEventListener('click', copyEpoch);

document.addEventListener('keypress', logKey);

function logKey(e) {
  if (e.code === 'Enter') {
    copyEpoch();
  };
}

