
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevSeconds => prevSeconds + 1);
    }, 1000)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
        {/* Do not remove the main div */}
        You've been on this page for {time} seconds.
    </div>
  )
}

export default App
