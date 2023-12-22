const timeout = document.querySelector("#timeout");
const interval = document.querySelector("#interval");

const intervalId = setInterval(tick, 1000);
const timeoutId = setTimeout(disableInterval, 5000);

function tick() {
  console.log("tick");
}

function disableInterval() {
  console.log(`IntervalId: ${intervalId}`);
  clearInterval(intervalId);
}

timeout.addEventListener("click", () => clearTimeout(timeoutId) );
interval.addEventListener("click", disableInterval);