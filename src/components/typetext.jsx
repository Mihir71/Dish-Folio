import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        const nextChar = text[currentIndex];
        setDisplayedText(prevText => prevText + nextChar);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <span className="typing-text">{displayedText}</span>;
};


export default TypingText