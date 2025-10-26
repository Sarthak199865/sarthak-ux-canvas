import SolarSystem3D from './SolarSystem3D';

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Stars Layer */}
      <div className="stars-container absolute inset-0">
        {/* Regular stars - static positions */}
        {[...Array(140)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 1}px`,
              height: `${Math.random() * 1 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          />
        ))}
        
        {/* Bright stars */}
        {[...Array(18)].map((_, i) => (
          <div
            key={`bright-star-${i}`}
            className="bright-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 2}px`,
              height: `${Math.random() * 1 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Four-point stars (lens flare effect) */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`flare-star-${i}`}
            className="flare-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${Math.random() * 10 + 20}s`,
            }}
          >
            <div className="flare-horizontal" />
            <div className="flare-vertical" />
          </div>
        ))}
      </div>

      {/* 3D Solar System */}
      <SolarSystem3D />


      <style>{`
        .star {
          position: absolute;
          background: #FFFFFF;
          border-radius: 50%;
          animation: starBlink 5s ease-in-out infinite;
        }
        
        .bright-star {
          position: absolute;
          background: #FFFFFF;
          border-radius: 50%;
          opacity: 0.95;
          animation: brightStarBlink 3s ease-in-out infinite;
          box-shadow: 0 0 4px #FFFFFF;
        }
        
        .flare-star {
          position: absolute;
          width: 10px;
          height: 10px;
        }
        
        .flare-horizontal,
        .flare-vertical {
          position: absolute;
          background: #FFFFFF;
          opacity: 0.9;
        }
        
        .flare-horizontal {
          width: 10px;
          height: 1px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          box-shadow: 0 0 6px #FFFFFF;
        }
        
        .flare-vertical {
          width: 1px;
          height: 10px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          box-shadow: 0 0 6px #FFFFFF;
        }
        
        @keyframes starBlink {
          0%, 100% { opacity: 0.3; }
          20% { opacity: 0.8; }
          40% { opacity: 0.5; }
          60% { opacity: 0.9; }
          80% { opacity: 0.4; }
        }
        
        @keyframes brightStarBlink {
          0%, 100% { opacity: 0.8; }
          25% { opacity: 1; }
          50% { opacity: 0.6; }
          75% { opacity: 0.95; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .star,
          .bright-star,
          .flare-star,
          .sun-core,
          circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
