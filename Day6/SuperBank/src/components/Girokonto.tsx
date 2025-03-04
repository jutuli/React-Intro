import Button from './Button';
import { useState, useRef } from 'react';

const Girokonto = () => {
  const [account, setAccount] = useState({
    balance: 0,
  });

  const accountInput = useRef<HTMLInputElement>(null);

  const handleDeposit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const depositAmount = Number(accountInput.current!.value);
    {
      depositAmount < 0
        ? window.alert('Please enter a number >= 0.')
        : setAccount({ balance: account.balance + depositAmount });
    }
  };

  const handleWithdrawal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const withdrawalAmount = Number(accountInput.current!.value);
    {
      withdrawalAmount < 0
        ? window.alert('Please enter a number >= 0.')
        : setAccount({ balance: account.balance - withdrawalAmount });
    }
  };

  return (
    <section className="flex flex-col justify-baseline items-center gap-5 bg-blue-200 p-10 w-100 place-self-center">
      <h2 className="font-bold text-xl ">Dein Girokonto</h2>
      <p className="bg-blue-100 px-25 py-4 font-bold text-lg rounded-md">
        {account.balance} €
      </p>
      <form className="flex flex-col gap-6">
        <input
          type="number"
          ref={accountInput}
          className="border rounded-md p-2 text-right"
          defaultValue={0}
        />
        <div className="flex gap-2">
          <Button text="Einzahlen" handleClick={handleDeposit} />
          <Button text="Auszahlen" handleClick={handleWithdrawal} />
        </div>
      </form>
    </section>
  );
};

export default Girokonto;
