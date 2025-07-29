
import { Box, Title, Group } from '@mantine/core';
import Button from '../common/Button';

export default function PageHeader({
  title,
  actions = [],
  children,
}) {
  return (
    <Box style={{
      marginBottom: '32px',
      padding: '32px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top gradient accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ef4444)',
        borderRadius: '24px 24px 0 0'
      }} />
      
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '60px',
          gap: '32px',
        }}
      >
        {/* Title: left, vertically centered */}
        <Title
          order={1}
          style={{
            fontWeight: 900,
            fontSize: '3rem',
            letterSpacing: '-0.025em',
            color: '#f8fafc',
            margin: 0,
            textAlign: 'left',
            flex: 1,
            lineHeight: 1.1,
            background: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </Title>

        {/* Actions: right, vertically centered */}
        <Group style={{ flexShrink: 0, gap: '16px', display: 'flex' }}>
          {actions
            .filter(action => action.label !== 'Bulk Edit')
            .map((action, index, arr) => (
              <button
                key={index}
                onClick={action.onClick}
                disabled={action.disabled}
                style={{
                  background: action.variant === 'secondary' 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  border: action.variant === 'secondary' 
                    ? '2px solid rgba(255, 255, 255, 0.2)'
                    : 'none',
                  borderRadius: '16px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: action.disabled ? 'not-allowed' : 'pointer',
                  boxShadow: action.variant === 'secondary' 
                    ? 'none'
                    : '0 8px 24px rgba(16, 185, 129, 0.4)',
                  transition: 'all 0.2s ease',
                  backdropFilter: action.variant === 'secondary' ? 'blur(10px)' : 'none',
                  opacity: action.disabled ? 0.5 : 1,
                  letterSpacing: '0.5px',
                  minWidth: '140px'
                }}
                onMouseOver={(e) => {
                  if (!action.disabled) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = action.variant === 'secondary' 
                      ? '0 8px 24px rgba(255, 255, 255, 0.1)'
                      : '0 12px 32px rgba(16, 185, 129, 0.6)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!action.disabled) {
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = action.variant === 'secondary' 
                      ? 'none'
                      : '0 8px 24px rgba(16, 185, 129, 0.4)';
                  }
                }}
              >
                {action.label}
              </button>
            ))}
        </Group>
      </Box>

      {/* Additional Content Area */}
      {children}
    </Box>
  );
}
