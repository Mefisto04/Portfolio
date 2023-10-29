import React, { useState, useEffect } from 'react';

const Role = () => {
  const phrases = ['Coder', 'Designer', 'Web Developer'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        setText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else {
        setText(phrases[phraseIndex].substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }

      if (charIndex > phrases[phraseIndex].length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        }, 1000); // Pause between phrases (adjust as needed)
      } else if (charIndex < 0) {
        setIsTyping(true);
      }
    }, 100); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
  }, [charIndex, isTyping, phraseIndex, phrases]);

  return <div className='text-red'> { text}</div>;
};

export default Role;
