import React from 'react';
import { Trophy, Star, X } from 'lucide-react';
import { Winner } from '../config/data';

interface WinnerDisplayProps {
  winner: Winner;
  onBack: () => void;
}

const WinnerDisplay: React.FC<WinnerDisplayProps> = ({ winner, onBack }) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <style>
        {`
          .winner-modal-enter {
            animation: winner-modal-enter 0.8s ease-out;
          }
          
          @keyframes winner-modal-enter {
            0% { 
              opacity: 0; 
              transform: scale(0.8) translateY(50px);
            }
            100% { 
              opacity: 1; 
              transform: scale(1) translateY(0);
            }
          }
          
          .winner-bounce {
            animation: winner-bounce 0.6s ease-out;
          }
          
          @keyframes winner-bounce {
            0% { transform: scale(0) rotate(-180deg); opacity: 0; }
            50% { transform: scale(1.2) rotate(-90deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); opacity: 1; }
          }
          
          .star-bounce {
            animation: star-bounce 0.8s ease-out infinite;
          }
          
          @keyframes star-bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .trophy-glow {
            animation: trophy-glow 2s ease-in-out infinite;
          }
          
          @keyframes trophy-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
            50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.8); }
          }
        `}
      </style>
      
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onBack}
      >
        <div 
          className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 max-w-2xl w-full shadow-2xl text-center winner-modal-enter relative"
          onClick={handleModalClick}
        >
          
          {/* Close Button */}
          <button
            onClick={onBack}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 z-10 backdrop-blur-sm"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 bg-opacity-30 rounded-full mb-4 winner-bounce trophy-glow backdrop-blur-sm">
              <Trophy className="w-10 h-10 text-yellow-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-pulse">
              🎉 WINNER! 🎉
            </h1>
            
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current star-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white border-opacity-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {winner.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm border border-white border-opacity-10">
                <div className="font-semibold text-yellow-300">Department</div>
                <div className="text-white">{winner.department}</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm border border-white border-opacity-10">
                <div className="font-semibold text-yellow-300">Supervisor</div>
                <div className="text-white">{winner.supervisor}</div>
              </div>
            </div>
          </div>

          <div className="text-white text-opacity-90 mb-8">
            <p className="text-lg">
              Congratulations on being selected as our guide!
            </p>
            <p className="text-sm mt-2 opacity-75">
              Selected on {new Date(winner.timestamp).toLocaleString()}
            </p>
          </div>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-purple-600 bg-opacity-80 text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold backdrop-blur-sm border border-purple-500 border-opacity-50"
          >
            <Trophy className="w-5 h-5" />
            Continue Selection
          </button>
        </div>
      </div>
    </>
  );
};

export default WinnerDisplay;