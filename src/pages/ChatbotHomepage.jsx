// import React from 'react'
// import Sidebar from '../components/Sidebar'

// const ChatbotHomepage = () => {
//   return (
//     <section className='flex flex-row'>
//       <Sidebar />
//       <div className='bg-black text-white h-screen w-full'>
//         <div className=" mt-10 grid grid-cols-4 h-20 w-[36rem] bg-gray-800 rounded-lg mx-auto ">
//           <button className='capitalize text-lg '>Chat with ChatBot</button>
//           <button className='capitalize text-lg '>Summarize the document</button>
//           <button className='capitalize text-lg '>Grammer Correction</button>
//           <button className='capitalize text-lg '>Grammer Correction</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ChatbotHomepage




import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ChatbotHomepage = () => {
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState('');

  // UseEffect to update the selectedButton state when the route changes
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/chatbot')) {
      setSelectedButton('chatbot');
    } else if (path.includes('/summarize')) {
      setSelectedButton('summarize');
    } else if (path.includes('/grammar-correction')) {
      setSelectedButton('grammar-correction');
    }
  }, [location.pathname]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <section className='flex flex-row'>
      <Sidebar />
      <div className='bg-black text-white h-screen w-full'>
        <div className="mt-10 grid grid-cols-4 h-20 w-[36rem] bg-gray-800 rounded-lg mx-auto ">
          <Link
            to='/chatbot'
            className={`capitalize text-lg ${selectedButton === 'chatbot' ? 'bg-purple-500' : ''}`}
            onClick={() => handleButtonClick('chatbot')}
          >
            Chat with ChatBot
          </Link>
          <Link
            to='/summarize'
            className={`capitalize text-lg ${selectedButton === 'summarize' ? 'bg-purple-500' : ''}`}
            onClick={() => handleButtonClick('summarize')}
          >
            Summarize the document
          </Link>
          <Link
            to='/grammar-correction'
            className={`capitalize text-lg ${selectedButton === 'grammar-correction' ? 'bg-purple-500' : ''}`}
            onClick={() => handleButtonClick('grammar-correction')}
          >
            Grammar Correction
          </Link>
          <Link
            to='/another-route'
            className={`capitalize text-lg ${selectedButton === 'another-route' ? 'bg-purple-500' : ''}`}
            onClick={() => handleButtonClick('another-route')}
          >
            Another Route
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChatbotHomepage;
