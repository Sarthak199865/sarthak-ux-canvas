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

      {/* Solar System SVG */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
        style={{ opacity: 0.9 }}
      >
        <defs>
          {/* Sun Glow */}
          <radialGradient id="sunGlow">
            <stop offset="0%" stopColor="#E27B58" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E27B58" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E27B58" stopOpacity="0" />
          </radialGradient>
          
          {/* Mars Gradient */}
          <radialGradient id="marsGradient">
            <stop offset="0%" stopColor="#C1440E" />
            <stop offset="100%" stopColor="#8B3A1F" />
          </radialGradient>
          
          {/* Earth Gradient */}
          <radialGradient id="earthGradient">
            <stop offset="0%" stopColor="#5A9FD4" />
            <stop offset="100%" stopColor="#2C5F7C" />
          </radialGradient>
          
          {/* Filters */}
          <filter id="sunGlowFilter">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="planetGlow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Sun with glow */}
        <circle cx="600" cy="600" r="60" fill="url(#sunGlow)" filter="url(#sunGlowFilter)" className="sun-outer-glow" />
        <circle cx="600" cy="600" r="38" fill="#E27B58" className="sun-core">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Orbital Paths */}
        <circle cx="600" cy="600" r="120" fill="none" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.12" />
        <circle cx="600" cy="600" r="200" fill="none" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.12" />
        <circle cx="600" cy="600" r="300" fill="none" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.12" />
        <circle cx="600" cy="600" r="420" fill="none" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.12" />
        <circle cx="600" cy="600" r="560" fill="none" stroke="#FFFFFF" strokeWidth="0.3" opacity="0.12" />

        {/* Mercury */}
        <g>
          <circle cx="720" cy="600" r="6" fill="#6B6B6B">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 600 600"
              to="360 600 600"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Venus */}
        <g>
          <circle cx="800" cy="600" r="9" fill="#D4C5B9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="45 600 600"
              to="405 600 600"
              dur="12s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Earth with Moon */}
        <g>
          <g>
            <circle cx="900" cy="600" r="11" fill="url(#earthGradient)" />
            <circle cx="925" cy="600" r="3" fill="#C0C0C0">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 900 600"
                to="360 900 600"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 600 600"
              to="360 600 600"
              dur="16s"
              repeatCount="indefinite"
            />
          </g>
        </g>

        {/* Mars (orbital) */}
        <g>
          <circle cx="1020" cy="600" r="14" fill="url(#marsGradient)" filter="url(#planetGlow)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 600 600"
              to="360 600 600"
              dur="22s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Gas Giant */}
        <g>
          <circle cx="1160" cy="600" r="20" fill="#9B8778">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 600 600"
              to="360 600 600"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>


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
