import { useState } from "react";
import skate2 from "@/assets/skate2.jpg";
import Navbar from "../Bars/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className=" border-b border-gray-300 py-4">
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

const FAQ = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const faqData = [
    {
      question: "How do I choose my skateboard?",
      answer:
        "Choosing a skateboard depends on your style and preferences. If you're a beginner, go for a wider, more stable deck. For experienced skaters, a smaller, more responsive deck is better.",
    },
    {
      question: "What are the shipping fees?",
      answer:
        "Shipping fees are calculated based on the size and weight of your order, as well as your location. You can view the fees before completing your order.",
    },
    {
      question: "Do you offer discounts on products?",
      answer:
        "Yes, we offer regular discounts on our products. Subscribe to our newsletter to stay informed about the latest offers and promotions.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept payments via credit card, PayPal, and other secure payment methods.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes, you can return a product within 30 days of receipt, as long as it is in its original condition.",
    },
  ];

  const handleHomeRedirect = () => {
    navigate("/");
  };

  return (
    <>
    <Navbar isProductDetailPage={false} scroll={true} />
      <div className="m-16 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            FAQ - Frequently Asked Questions
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleHomeRedirect}
            className="bg-yellow-700 text-black py-2 px-6 rounded hover:bg-yellow-800 transition duration-200"
          >
            Go to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default FAQ;
