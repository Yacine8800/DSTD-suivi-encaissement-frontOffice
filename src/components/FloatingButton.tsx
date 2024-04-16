import React from 'react';

type FloatingButtonProps = {
  onClick: () => void;
};

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <button
      className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full shadow-lg z-10"
      onClick={onClick}
    >
      Mon Bouton Flottant
    </button>
  );
};

export default FloatingButton;
