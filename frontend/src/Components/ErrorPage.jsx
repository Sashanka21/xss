// src/components/ErrorPage.jsx
import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-6xl font-bold text-red-500">{errorCode || 'Error'}</h1>
        <p className="text-xl mt-4">{errorMessage || 'Something went wrong.'}</p>
        <div className="mt-6">
          <button
            onClick={handleGoBack}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
          >
            Go Back
          </button>
          <button
            onClick={handleGoHome}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
