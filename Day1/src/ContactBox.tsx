import { useState } from 'react';

export default function ContactBox() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Vorname"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Nachname"
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <p>Vorname: {firstName}</p>
        <p>Nachname: {lastName}</p>
        <p>E-Mail: {email}</p>
      </div>
    </section>
  );
}
