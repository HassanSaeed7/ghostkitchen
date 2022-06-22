import React, { useState } from "react";


const faqList = [
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}, 
  {question: "Please enter your question", answer: "Please enter your answer"}
]

const faq = () => {

return (
<div className='min-h-screen mt-20 max-w-screen-lg m-auto'>
  <h1 className='text-center text-5xl text-bold text-indigo-600'>Frequently Asked Questions</h1>
  {faqList.map(faq => (
  <div className="mt-10 border-b-4">
    <p className="font-bold text-lg">{faq.question}?</p>
    <p className='mb-5 indent-3'>{faq.answer}</p> 
  </div>
  ))}
</div>
)}



 

export default faq;
