import { useState } from 'react';

export default function DayNightToggle() {
  const [isDay, setIsDay] = useState(true);
  const dayTime = 'Day';
  const nightTime = 'Night';

  return (
    <div>
      <h1>{isDay ? dayTime : nightTime}</h1>
      <button onClick={() => setIsDay((prev) => !prev)}>
        Change to {!isDay ? dayTime : nightTime}
      </button>
    </div>
  );
}
