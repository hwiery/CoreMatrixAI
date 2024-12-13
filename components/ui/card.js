import React from 'react';

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-gray-900 rounded-lg shadow-lg p-6 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div
      className={`border-b border-gray-700 pb-4 mb-4 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3
      className={`text-xl font-bold ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className, ...props }) => {
  return (
    <div
      className={`border-t border-gray-700 pt-4 mt-4 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};