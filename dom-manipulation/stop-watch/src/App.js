import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [sec, setSec] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    if (isStart) {
      const secInterval = setInterval(
        () =>
          setSec((prev) => {
            if (prev === 59) {
              setMin((prevMin) => {
                if (prevMin === 59) {
                  setHrs((prevHrs) => prevHrs + 1);
                  return 0;
                } else {
                  return prevMin + 1;
                }
              });
              return 0;
            } else {
              return prev + 1;
            }
          }),
        1000
      );

      return () => {
        clearInterval(secInterval);
      };
    }
  }, [isStart]);
  const handleStart = () => {
    setIsStart(true);
  };

  const handleStop = () => {
    setIsStart(false);
  };

  const handleReset = () => {
    setIsStart(false);
    setSec(0)
    setMin(0)
    setHrs(0)
  };
  return (
    <div className="App">
      <h3>Stop-Watch</h3>
      <div className="clock">
        <div className="hrs">
          Hrs
          {hrs}
        </div>
        <div className="min">
          Min
          {min}
        </div>
        <div className="sec">
          Sec
          {sec}
        </div>
      </div>
      <div className="actions">
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
