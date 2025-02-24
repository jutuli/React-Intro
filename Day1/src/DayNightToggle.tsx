import { useState } from 'react';

export default function DayNightToggle() {
  const [isDay, setIsDay] = useState(true);
  const dayTime = 'Day';
  const nightTime = 'Night';

  return (
    <div className={`${isDay ? 'bg-yellow-200' : 'bg-gray-900'}`}>
      <h1 className={`${isDay ? 'text-black' : 'text-white'}`}>
        {isDay ? dayTime : nightTime}
      </h1>
      <button
        onClick={() => {
          setIsDay((prev) => !prev);
        }}>
        Change to {!isDay ? dayTime : nightTime}
      </button>
    </div>
  );
}
