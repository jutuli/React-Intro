import Faq from './Faq';
import ContactBox from './ContactBox';
import DayNightToggle from './DayNightToggle';
import './App.css';

function App() {
  return (
    <>
      <Faq question="Why is react great" answer="Because it is the best" />
      <ContactBox />
      <DayNightToggle />
    </>
  );
}

export default App;
