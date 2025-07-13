import { Box, Group, Text, Avatar } from '@mantine/core';

// Inline SVG chevron icon
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Inline logo icon
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <circle cx="16" cy="16" r="16" fill="#ffd700" />
    <text x="16" y="21" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#222">PH</text>
  </svg>
);

function Header({ user = { name: 'Gage', avatar: 'https://i.pravatar.cc/40?img=3' } }) {
  return (
    <Box
      component="header"
      style={{
        background: '#222',
        color: '#fff',
        padding: '0.5rem 2rem',
        fontSize: '1.25rem',
        fontWeight: 500,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        letterSpacing: '0.5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 64,
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <LogoIcon />
        <Text style={{ fontWeight: 700, fontSize: '1.35rem', letterSpacing: '1px' }}>PROD-HUB</Text>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', paddingRight: '2rem' }}>
        <Avatar radius="xl" size={32} style={{ background: '#ffd700', color: '#222', fontWeight: 700, fontSize: '1.1rem' }}>G</Avatar>
        <Text size="md" style={{ color: '#fff', fontWeight: 500 }}>Hello, {user.name}!</Text>
        <ChevronDownIcon />
      </Box>
    </Box>
  );
}

export default Header;
