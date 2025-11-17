import SolarSystem3D from './SolarSystem3D';

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Stars Layer */}
      <div className="stars-container absolute inset-0">
        {/* Regular stars - static positions with gentle flicker */}
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 1.5 + 0.8;
          const duration = Math.random() * 4 + 2;
          const delay = Math.random() * 6;
          const colorVariant = Math.random();
          
          return (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                background: colorVariant > 0.85 ? '#E8F4FF' : colorVariant > 0.7 ? '#FFFEF0' : '#FFFFFF',
              }}
            />
          );
        })}
        
        {/* Bright stars with soft glow */}
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 1.2 + 1.8;
          const duration = Math.random() * 3 + 2.5;
          const delay = Math.random() * 5;
          
          return (
            <div
              key={`bright-star-${i}`}
              className="bright-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
        
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
        :root {
          --star-min-opacity: 0.6;
          --star-max-opacity: 1.0;
          --min-flicker-duration: 2s;
          --max-flicker-duration: 6s;
        }

        .star {
          position: absolute;
          border-radius: 50%;
          animation: starFlicker ease-in-out infinite;
          will-change: opacity;
        }
        
        .bright-star {
          position: absolute;
          background: #FFFFFF;
          border-radius: 50%;
          animation: brightStarFlicker ease-in-out infinite;
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
          will-change: opacity;
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
        
        @keyframes starFlicker {
          0%, 100% { opacity: 0.7; }
          25% { opacity: 0.95; }
          50% { opacity: 0.6; }
          75% { opacity: 0.85; }
        }
        
        @keyframes brightStarFlicker {
          0%, 100% { opacity: 0.85; }
          33% { opacity: 1; }
          66% { opacity: 0.75; }
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
