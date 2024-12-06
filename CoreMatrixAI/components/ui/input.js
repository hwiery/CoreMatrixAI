import React from 'react';

export const Input = ({ label, className, ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-gray-400 mb-2">{label}</label>
      )}
      <input
        className={`bg-gray-800 border border-gray-700 px-4 py-2 rounded-md w-full ${className || ''}`}
        {...props}
      />
    </div>
  );
};