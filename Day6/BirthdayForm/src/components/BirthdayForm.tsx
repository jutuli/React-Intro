import { useRef, useEffect } from 'react';
import { IPerson } from '../App';

interface IBirthdayFormProps {
  person: IPerson;
  setPerson: (person: IPerson) => void;
}

const BirthdayForm = ({ person, setPerson }: IBirthdayFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);

  const handleBirthday = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const today = new Date();
    const birthday = new Date(birthdayRef.current!.value);

    const isBirthday =
      today.getDate() === birthday.getDate() &&
      today.getMonth() === birthday.getMonth();

    setPerson({
      firstName: firstNameRef.current!.value,
      birthday: birthday,
      isBirthdayToday: isBirthday,
    });
    window.alert(
      isBirthday
        ? '🎉 Du hast heute Geburtstag! 🎂'
        : 'Du hast nicht <Geburstag styleName={}></Geburstag>. 😢'
    );
  };

  return (
    <form onSubmit={handleBirthday} className="flex flex-col w-1/5 gap-6 m-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="first-name">Vorname</label>
        <input
          type="text"
          id="first-name"
          ref={firstNameRef}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="birthday">Geburtstag</label>
        <input
          type="date"
          id="birthday"
          ref={birthdayRef}
          className="border rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-green-800 rounded-md py-2 font-bold text-white cursor-pointer">
        Habe ich heute Geburtstag?
      </button>
    </form>
  );
};

export default BirthdayForm;
