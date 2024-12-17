import React, { useState } from "react";

const FAQ = () => {
  // FAQ Data
  const faqs = [
    {
      question: "What is SDC Club?",
      answer: "SDC Club is a community for developers focused on improving skills in web development, mobile development, and emerging technologies.",
    },
    {
      question: "What technologies are taught here?",
      answer: "We focus on technologies like MERN stack, Android development, frontend, backend, and data science.",
    },
    {
      question: "How can I join the club?",
      answer: "You can join the club by filling out the registration form available on our official website.",
    },
  ];

  // State to manage which FAQ is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle active question
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-[70%] mx-auto mt-10 mb-10">
      <h2 className="text-4xl font-bold font-rale text-blue-600 text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 rounded-md p-4 bg-white shadow-2xl">
            <div
              className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-[#153243] font-rale">{faq.question}</span>
              <span className=" text-[#153243 text-2xl font-rale">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 font-rale text-sm mt-2 transition duration-500 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
