import { useState } from 'react';
import Faq from './Faq';
import ContactBox from './ContactBox';
import './App.css';

function App() {
  return (
    <>
      <Faq question="Why is react great" answer="Because it is the best" />
      <ContactBox />
    </>
  );
}

export default App;
