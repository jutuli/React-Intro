import { useState } from 'react';

export default function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section>
      <p>{question}</p>
      <button onClick={() => setShowAnswer(!showAnswer)}>Click Me</button>
      {showAnswer ? <p>{answer}</p> : null}
    </section>
  );
}
