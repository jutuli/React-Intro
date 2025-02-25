import { useState } from 'react';
import './Faq.css';

export default function FaqElement({
  question,
  shortAnswer,
  longAnswer,
}: {
  question: string;
  shortAnswer: string;
  longAnswer: string;
}) {
  const [showShortAnswer, setShowShortAnswer] = useState(false);
  const [showLongAnswer, setShowLongAnswer] = useState(false);
  return (
    <li>
      <div>
        <h2>{question}</h2>
        <button onClick={() => setShowShortAnswer(!showShortAnswer)}>
          {showShortAnswer ? '-' : '+'}
        </button>
      </div>
      {showShortAnswer && (
        <div>
          <h3>{shortAnswer}</h3>
          <button onClick={() => setShowLongAnswer(!showLongAnswer)}>
            {showLongAnswer ? '-' : '+'}
          </button>
        </div>
      )}
      {showLongAnswer && <p>{longAnswer}</p>}
    </li>
  );
}
