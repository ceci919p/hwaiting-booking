import { useEffect, useState } from "react";

export default function Timer(props) {
  const { initialMinute = 5, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="timer-wrapper">
      <div className="timer">
        {minutes === 0 && seconds === 0 ? null : (
          <p>
            {" "}
            Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}
      </div>
    </div>
  );
}
