
import React from 'react';

interface AgeGateProps {
  onVerify: (isVerified: boolean) => void;
}

const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white border border-pink-200/50 rounded-lg p-8 max-w-md mx-4 text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-pink-500 mb-4">Age Verification</h1>
          <div className="w-16 h-1 bg-pink-500 mx-auto mb-6"></div>
        </div>
        
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          This website contains adult-themed content that may not be suitable for minors.
        </p>
        
        <p className="text-pink-600 font-semibold mb-8">
          Are you 18 years of age or older?
        </p>
        
        <div className="flex space-x-4">
          <button
            onClick={() => onVerify(true)}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Yes, I'm 18+
          </button>
          <button
            onClick={() => onVerify(false)}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            No, Exit
          </button>
        </div>
        
        <p className="text-gray-400 text-xs mt-4">
          By clicking "Yes, I'm 18+", you confirm that you are of legal age to view adult content.
        </p>
      </div>
    </div>
  );
};

export default AgeGate;
