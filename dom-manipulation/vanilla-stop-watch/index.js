let timeInterval;
const action = start.addEventListener("click", () => {
  start.setAttribute("disabled", true);
  let secCount = 57;
  let minCount = 59;
  let hrsCount = 0;
  timeInterval = setInterval(() => {
    secCount += 1;
    const newDiv = document.createElement("div");
    newDiv.className = "sec";
    newDiv.id = "sec";
    newDiv.append(secCount);
    sec.replaceWith(newDiv);

    if (secCount === 59) {
      secCount = -1;
      if (minCount === 59) {
        minCount = -1;
        const hrsDiv = document.createElement("div");
        hrsDiv.className = "hrs";
        hrsDiv.id = "hrs";
        hrsCount += 1;
        hrsDiv.append(hrsCount);
        hrs.replaceWith(hrsDiv);
      }

      const minDiv = document.createElement("div");
      minDiv.className = "min";
      minDiv.id = "min";
      minCount += 1;
      minDiv.append(minCount);
      min.replaceWith(minDiv);
    }
  }, 1000);
});
