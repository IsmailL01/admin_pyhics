import React from 'react';

const ButtonShare = ({ text }: { text: string }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ text });
    }
  };
  return <button onClick={handleShare}>Поделиться</button>;
};

export default ButtonShare;
