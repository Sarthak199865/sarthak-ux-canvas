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
        
        {/* Shooting stars / Meteors */}
        {[...Array(5)].map((_, i) => {
          const startY = Math.random() * 50;
          const angle = Math.random() * 30 - 15; // Vary angle slightly
          const duration = Math.random() * 1 + 1.5;
          const delay = Math.random() * 20 + i * 8; // Spread out appearances
          
          return (
            <div
              key={`meteor-${i}`}
              className="meteor"
              style={{
                top: `${startY}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
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
        
        .meteor {
          position: absolute;
          left: -100px;
          width: 2px;
          height: 2px;
          background: #FFFFFF;
          border-radius: 50%;
          box-shadow: 
            0 0 10px 2px rgba(255, 255, 255, 0.8),
            0 0 20px 4px rgba(180, 200, 255, 0.5);
          animation: meteorShoot 30s ease-in infinite;
          opacity: 0;
          will-change: transform, opacity;
        }
        
        .meteor::before {
          content: '';
          position: absolute;
          top: 0;
          right: 2px;
          width: 100px;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 1) 100%
          );
          border-radius: 50%;
          transform-origin: right center;
        }
        
        @keyframes meteorShoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          10% {
            transform: translateX(min(120vw, 2000px)) translateY(min(60vh, 1000px));
            opacity: 0;
          }
          100% {
            transform: translateX(min(120vw, 2000px)) translateY(min(60vh, 1000px));
            opacity: 0;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .star,
          .bright-star,
          .flare-star,
          .meteor,
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
