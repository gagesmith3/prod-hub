import { Title, Text } from '@mantine/core';

export default function TeamWidgetCard({
  title,
  icon,
  accent = 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  description,
  children,
  span = 1,
  avatar,
  ...props
}) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        ...props.style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(30,32,36,0.15), 0 2px 8px rgba(30,32,36,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)';
      }}
    >
      {/* Top gradient accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: accent,
        borderRadius: '16px 16px 0 0'
      }} />

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {icon && (
            <div style={{
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {icon}
            </div>
          )}
          <Title 
            order={4} 
            style={{ 
              margin: 0,
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#1a202c',
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </Title>
        </div>
        {avatar && (
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#fff',
            fontWeight: 600
          }}>
            {avatar}
          </div>
        )}
      </div>

      {/* Description */}
      {description && (
        <Text style={{ 
          color: '#4a5568',
          fontSize: '0.9rem',
          lineHeight: 1.4,
          marginBottom: '8px'
        }}>
          {description}
        </Text>
      )}

      {/* Content */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
