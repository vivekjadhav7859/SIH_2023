import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const ToggleButtons = () => {
    const location = useLocation();
    const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
        const path = location.pathname;
        // Extract the button name from the path and set the selected button
        const buttonName = path.split('/').filter(Boolean)[0];
        setSelectedButton(buttonName);
    }, [location.pathname]);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <section className='flex flex-row'>
            <div className='bg-black text-white h-screen w-full'>
                <div className="mt-10 grid grid-cols-4 h-20 w-[35rem] bg-gray-800 rounded-lg mx-auto text-center  ">
                    <Link
                        to='/chatbot'
                        className={`capitalize text-lg self-center ${selectedButton === 'chatbot' ? 'bg-purple-500 rounded-lg' : ''}`}
                        onClick={() => handleButtonClick('chatbot')}
                    >
                        Chat with ChatBot
                    </Link>
                    <Link
                        to='/summarization'
                        className={`capitalize text-lg self-center ${selectedButton === 'summarization' ? 'bg-purple-500 rounded-lg' : ''}`}
                        onClick={() => handleButtonClick('summarization')}
                    >
                        Summarize the document
                    </Link>
                    <Link
                        to='/grammar'
                        className={`capitalize text-lg self-center ${selectedButton === 'grammar' ? 'bg-purple-500 rounded-lg' : ''}`}
                        onClick={() => handleButtonClick('grammar')}
                    >
                        Grammar Correction
                    </Link>
                    <Link
                        to='/another-route'
                        className={`capitalize text-lg self-center ${selectedButton === 'another-route' ? 'bg-purple-500 rounded-lg' : ''}`}
                        onClick={() => handleButtonClick('another-route')}
                    >
                        Chat With Documents
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ToggleButtons;
