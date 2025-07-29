import { Box, Group, Text, Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';

// Inline SVG team/organization icon
const TeamIcon = () => (
  <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Inline SVG chevron icon
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);


// Inline SVG single user icon
const UserIcon = () => (
  <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Modern gradient logo icon
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginRight: 16, verticalAlign: 'middle' }}>
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
    <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="900" fill="#ffffff">PH</text>
  </svg>
);

function Header({ user = { name: 'Gage', avatar: 'https://i.pravatar.cc/40?img=3' }, team = 'ICS' }) {
  return (
    <Box
      component="header"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#f8fafc',
        padding: '0 clamp(16px, 4vw, 32px)', // Responsive padding
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', // Responsive font size
        fontWeight: 600,
        boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
        letterSpacing: '0.5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 80,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        zIndex: 50,
        '@media (max-width: 768px)': {
          minHeight: 60
        }
      }}
    >
      {/* Netflix-style gradient accent bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #ef4444)',
      }} />
      
      <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box style={{ display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <LogoIcon />
          <Text style={{ 
            fontWeight: 900, 
            fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', // Responsive logo text
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            // Fallback for browsers that don't support background-clip: text
            color: '#10b981'
          }}>
            PRODUCTION-HUB
          </Text>
        </Box>
      </Link>
      
      <Box style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

        {/* User Dropdown */}
        <Box style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 12, 
          cursor: 'pointer', 
          padding: '8px 16px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.2s ease',
          height: '44px' // Fixed smaller height
        }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          <UserIcon />
          <Text size="md" style={{ color: '#f8fafc', fontWeight: 600 }}>Hello, {user.name}!</Text>
          <ChevronDownIcon />
        </Box>

        {/* Team Dropdown */}
        <Box style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 10, 
          cursor: 'pointer', 
          padding: '8px 14px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.2s ease',
          height: '44px'
        }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          <TeamIcon />
          <Text size="md" style={{ color: '#f8fafc', fontWeight: 600 }}>{team}</Text>
          <ChevronDownIcon />
        </Box>

      </Box>
    </Box>
  );
}

export default Header;
