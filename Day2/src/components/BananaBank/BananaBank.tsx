import { useState } from 'react';
import './BananaBank.css';

const BananaBank = () => {
  const [amount, setAmount] = useState(0);
  const [saldo, setSaldo] = useState(0);

  const handleDeposit = () => {
    setSaldo(saldo + amount);
  };
  const handleWithdrawal = () => {
    if (saldo < amount)
      return alert(
        `Insufficient Balance. You can withdraw no more than ${saldo} €.`
      );
    setSaldo(saldo - amount);
  };
  return (
    <div>
      <h1>Banana Bank</h1>
      <section className="konto">
        <h2>Mein Girokonto</h2>
        <div className="saldo">{saldo}</div>
        <input
          type="number"
          id="payment"
          className="geldbetrag"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="buttons">
          <button className="einzahlen" onClick={handleDeposit}>
            Einzahlen
          </button>
          <button className="auszahlen" onClick={handleWithdrawal}>
            Auszahlen
          </button>
        </div>
      </section>
    </div>
  );
};

export default BananaBank;
