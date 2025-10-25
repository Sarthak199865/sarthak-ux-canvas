const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Stars Layer */}
      <div className="stars-container absolute inset-0">
        {/* Regular stars */}
        {[...Array(140)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 1}px`,
              height: `${Math.random() * 1 + 1}px`,
              opacity: Math.random() * 0.4 + 0.4,
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

      {/* Large Featured Mars (Right Edge) */}
      <div className="large-mars">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          className="absolute -right-64 top-1/2 -translate-y-1/2"
          style={{ opacity: 0.95 }}
        >
          <defs>
            <radialGradient id="largeMarsGradient" cx="40%" cy="30%">
              <stop offset="0%" stopColor="#B5967F" />
              <stop offset="40%" stopColor="#C1440E" />
              <stop offset="100%" stopColor="#6B3A2D" />
            </radialGradient>
            <radialGradient id="crater1">
              <stop offset="0%" stopColor="#4A2818" />
              <stop offset="100%" stopColor="#6B3A2D" />
            </radialGradient>
            <filter id="marsGlow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          
          {/* Main Mars sphere */}
          <circle cx="400" cy="400" r="380" fill="url(#largeMarsGradient)" />
          
          {/* Craters */}
          <circle cx="320" cy="280" r="40" fill="url(#crater1)" opacity="0.6" />
          <circle cx="450" cy="380" r="60" fill="url(#crater1)" opacity="0.5" />
          <circle cx="280" cy="480" r="30" fill="url(#crater1)" opacity="0.7" />
          <circle cx="380" cy="520" r="25" fill="url(#crater1)" opacity="0.6" />
          <circle cx="500" cy="260" r="35" fill="url(#crater1)" opacity="0.55" />
          
          {/* Atmospheric rim */}
          <circle 
            cx="400" 
            cy="400" 
            r="380" 
            fill="none" 
            stroke="#E27B58" 
            strokeWidth="3" 
            opacity="0.6"
            filter="url(#marsGlow)"
          />
        </svg>
      </div>

      <style>{`
        .star {
          position: absolute;
          background: #FFFFFF;
          border-radius: 50%;
          animation: starPulse 4s ease-in-out infinite;
        }
        
        .bright-star {
          position: absolute;
          background: #FFFFFF;
          border-radius: 50%;
          opacity: 0.95;
          animation: brightPulse 2.5s ease-in-out infinite;
          box-shadow: 0 0 4px #FFFFFF;
        }
        
        .flare-star {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: rotate 25s linear infinite;
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
        
        @keyframes starPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes brightPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
