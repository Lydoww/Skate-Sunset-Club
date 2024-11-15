import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        onClick={toggleAnswer}
        className="cursor-pointer text-xl font-semibold text-black hover:text-yellow-800 transition duration-200"
      >
        {question}
      </div>
      {isOpen && <div className="mt-2 text-gray-700 text-lg">{answer}</div>}
    </div>
  );
};

export default FaqItem;
