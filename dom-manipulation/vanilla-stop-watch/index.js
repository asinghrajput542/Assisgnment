let timeInterval;
stopBtn.setAttribute("disabled", true);
resetBtn.setAttribute("disabled", true);
let secCount = 57;
let minCount = 59;
let hrsCount = 0;
const startAction = startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");

  timeInterval = setInterval(() => {
    secCount += 1;
    const secDiv = divCreator("sec", "sec", secCount);
    sec.replaceWith(secDiv);

    if (secCount === 59) {
      secCount = -1;
      if (minCount === 59) {
        minCount = -1;
        hrsCount += 1;
        const hrsDiv = divCreator("hrs", "hrs", hrsCount);
        hrs.replaceWith(hrsDiv);
      }
      minCount += 1;
      const minDiv = divCreator("min", "min", minCount);
      min.replaceWith(minDiv);
    }
  }, 1000);
});

const stopAction = stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});

const resetAction = resetBtn.addEventListener("click", () => {
  if (timeInterval) {
    clearInterval(timeInterval);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", true);
    resetBtn.setAttribute("disabled", true);
    secCount = 0;
    minCount = 0;
    hrsCount = 0;
    const hrsDiv = divCreator("hrs", "hrs", hrsCount);
    hrs.replaceWith(hrsDiv);
    const secDiv = divCreator("sec", "sec", secCount);
    sec.replaceWith(secDiv);
    const minDiv = divCreator("min", "min", minCount);
    min.replaceWith(minDiv);
  }
});

const divCreator = (divClassName, divId, value) => {
  const newDiv = document.createElement("div");
  newDiv.className = divClassName;
  newDiv.id = divId;
  newDiv.append(value);
  return newDiv;
};
