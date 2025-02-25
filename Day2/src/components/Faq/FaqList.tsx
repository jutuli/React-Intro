import FaqElement from './FaqElement';
import { faq } from '../../faqData';

const FaqList = () => {
  return (
    <ul>
      {faq.map((faqItem, index) => (
        <FaqElement
          key={index}
          question={faqItem.question}
          shortAnswer={faqItem.answer}
          longAnswer={faqItem.answerLong}
        />
      ))}
    </ul>
  );
};

export default FaqList;
