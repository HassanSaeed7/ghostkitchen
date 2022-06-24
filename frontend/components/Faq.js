import React, { useState } from 'react'
const faqList = [
    {question: "Please enter your question", answer: "Please enter your answer"}, 
    {question: "Please enter your question", answer: "Please enter your answer"}, 
    {question: "Please enter your question", answer: "Please enter your answer"},
  ]

const Faq = () => {
    const [open, setOpen] = useState(false)

    const clickHandler = () => { 
     
     setOpen(!open)
    }
  return (
    <div className='my-10'>

    {faqList.map((faq) => (
  <div className=''>

    <h2 className=''>
    <button type="button" onClick={clickHandler} className="flex justify-between items-center p-5 w-screen max-w-screen-lg m-auto font-medium text-left border-b-2 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 text-gray-900" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>{faq.question}</span>
    </button>
  </h2>
  {open && (<div className="" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border-b-1 border-gray-200 w-screen max-w-screen-lg m-auto">
      <p className="mb-2 text-gray-500">{faq.answer}</p>
    </div>
  </div>)}
  </div>
))} 



    </div>
  )
}

export default Faq