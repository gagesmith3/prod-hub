export default function HeroHeader({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttons = [],
  gradient = 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ef4444)',
  textShadow = true,
  maxWidth = '800px'
}) {
  return (
    <div style={{
      background: backgroundImage 
        ? `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), url("${backgroundImage}") center/cover`
        : 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), url("https://via.placeholder.com/1800x400/1e293b/64748b?text=Production+Hub") center/cover',
      borderRadius: '24px',
      padding: '48px',
      marginBottom: '32px',
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: gradient,
        borderRadius: '24px 24px 0 0'
      }} />
      
      <div style={{
        color: '#fff',
        maxWidth: maxWidth
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Responsive title
          fontWeight: 900,
          margin: '0 0 16px 0',
          letterSpacing: '-0.05em',
          textShadow: textShadow ? '0 4px 20px rgba(0,0,0,0.5)' : 'none'
        }}>
          {title}
        </h1>
        
        {subtitle && (
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', // Responsive subtitle
            margin: '0 0 24px 0',
            opacity: 0.9,
            fontWeight: 300
          }}>
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap' // Allow buttons to wrap on mobile
          }}>
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                style={{
                  background: button.primary 
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  border: button.primary ? 'none' : '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '16px',
                  padding: button.primary ? '16px 32px' : '14px 32px',
                  fontSize: 'clamp(14px, 2vw, 16px)', // Responsive button text
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: button.primary ? '0 8px 24px rgba(16, 185, 129, 0.4)' : 'none',
                  backdropFilter: button.primary ? 'none' : 'blur(10px)',
                  transition: 'all 0.3s ease',
                  minWidth: 'fit-content'
                }}
                onMouseOver={(e) => {
                  if (button.primary) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.5)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (button.primary) {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }
                }}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
