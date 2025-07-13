import { Button as MantineButton } from '@mantine/core';

export default function Button({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  onClick, 
  disabled = false,
  style = {},
  ...props 
}) {
  const variants = {
    primary: {
      background: '#ffd700',
      color: '#222',
      border: 'none',
      fontWeight: 600,
    },
    secondary: {
      background: 'transparent',
      color: '#ffd700',
      border: '2px solid #ffd700',
      fontWeight: 600,
    },
    danger: {
      background: '#ff4757',
      color: '#fff',
      border: 'none',
      fontWeight: 600,
    },
  };

  const sizes = {
    small: { padding: '8px 16px', fontSize: '14px' },
    medium: { padding: '12px 24px', fontSize: '16px' },
    large: { padding: '16px 32px', fontSize: '18px' },
  };

  const buttonStyle = {
    ...variants[variant],
    ...sizes[size],
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    ...style,
  };

  return (
    <MantineButton
      style={buttonStyle}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
