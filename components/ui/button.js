import React from 'react';

export const Button = ({ children, className, variant = 'default', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    default: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};