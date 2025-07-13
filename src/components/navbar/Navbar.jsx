import { Box, Stack, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
// Inline SVG icons for faster loading

const HomeIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <path d="M3 10.5L12 4l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const FolderIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M3 7V5a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const UsersIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <circle cx="12" cy="8" r="3" />
    <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
    <circle cx="6" cy="16" r="2" />
    <circle cx="18" cy="16" r="2" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);


function Navbar({ mobile, onNavigate }) {
  const location = useLocation();
  const navItems = [
    { label: 'Dashboard', icon: <HomeIcon />, to: '/dashboard' },
    { label: 'Projects', icon: <FolderIcon />, to: '/projects' },
    { label: 'Calendar', icon: <CalendarIcon />, to: '/calendar' },
    { label: 'Team', icon: <UsersIcon />, to: '/team' },
    { label: 'Settings', icon: <SettingsIcon />, to: '/settings' },
  ];

  return (
    <Box
      p="md"
      style={{
        width: mobile ? '100%' : '72px',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        color: '#fff',
        minHeight: '100vh',
        boxShadow: mobile ? 'none' : '2px 0 12px rgba(0,0,0,0.10)',
        borderRight: mobile ? 'none' : '1px solid #222',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Stack gap="md" style={{ alignItems: 'center', width: '100%', justifyContent: 'center' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            label={
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                {item.icon}
                <span style={{ fontSize: 12, marginTop: 2, color: '#e0e0e0', fontWeight: 500, textAlign: 'center', width: '100%' }}>{item.label}</span>
              </div>
            }
            component={Link}
            to={item.to}
            active={location.pathname === item.to}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 64,
              width: '100%',
              background: location.pathname === item.to ? 'rgba(255,215,0,0.08)' : 'transparent',
              borderRadius: 12,
              transition: 'background 0.2s',
            }}
            onClick={onNavigate}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Navbar;
