import { useState } from 'react';
import BirthdayForm from './components/BirthdayForm';

export interface IPerson {
  firstName: string;
  birthday: Date;
  isBirthdayToday: boolean;
}

function App() {
  const [person, setPerson] = useState<IPerson>({
    firstName: '',
    birthday: new Date('2020-01-01'),
    isBirthdayToday: false,
  });

  return (
    <>
      <BirthdayForm person={person} setPerson={setPerson} />
    </>
  );
}

export default App;
