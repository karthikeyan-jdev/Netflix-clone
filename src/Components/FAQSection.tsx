import { useState } from "react";
import { faqData } from "../data/FAQData";
import { GoPlus } from "react-icons/go";

const FAQSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="contant-width">
      <h1 className="headline">Frequently Asked Questions</h1>

      <div className="space-y-2">
        {faqData.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => toggleFaq(item.id)}
              className="bg-FAQBg p-5 cursor-pointer hover:bg-gray-200/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-xl">
                  {item.question}
                </h3>

                {/* Plus rotate animation */}
                <GoPlus
                  size={32}
                  color="white"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              <p
                className={`text-gray-300 text-md overflow-hidden transition-all duration-300 ${
                  isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
