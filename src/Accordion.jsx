import { useState } from "react";
function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid gray",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <h3 onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {question}
      </h3>
      {open && <p>{answer}</p>}
    </div>
  );
}
function Accordion() {
  const faqs = [
    {
      question: "React কী?",
      answer: "React হলো একটি JavaScript লাইব্রেরি যা UI বানাতে ব্যবহার হয়।",
    },
    {
      question: "State কী?",
      answer:
        "State মানে হলো component এর ডাটা, যা সময়ের সাথে পরিবর্তন হতে পারে।",
    },
    {
      question: "Component কী?",
      answer: "UI এর ছোট ছোট অংশগুলোকে component বলে।",
    },
  ];
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <h2>FAQ section</h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
export default Accordion;
