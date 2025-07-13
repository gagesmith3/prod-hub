import { Box, Stack, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
// Inline SVG icons for faster loading

const HomeIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <path d="M3 10.5L12 4l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const FolderIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M3 7V5a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const UsersIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <circle cx="9" cy="7" r="4" />
    <path d="M17 11a4 4 0 1 0-8 0" />
    <path d="M2 21v-2a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffd700" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: 12, verticalAlign: 'middle' }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

function Navbar() {
  const location = useLocation();
  return (
    <Box
      p="md"
      style={{
        width: '200px',
        flexShrink: 0,
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        color: '#fff',
        minHeight: '100vh',
        boxShadow: '2px 0 12px rgba(0,0,0,0.10)',
        borderRight: '1px solid #222',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Stack gap="md" style={{ alignItems: 'center' }}>
        <NavLink
          label={<span style={{ fontSize: 20 }}>Dashboard</span>}
          leftSection={<HomeIcon />}
          component={Link}
          to="/dashboard"
          active={location.pathname === '/dashboard'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Projects</span>}
          leftSection={<FolderIcon />}
          component={Link}
          to="/projects"
          active={location.pathname === '/projects'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Calendar</span>}
          leftSection={<CalendarIcon />}
          component={Link}
          to="/calendar"
          active={location.pathname === '/calendar'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Team</span>}
          leftSection={<UsersIcon />}
          component={Link}
          to="/team"
          active={location.pathname === '/team'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Settings</span>}
          leftSection={<SettingsIcon />}
          component={Link}
          to="/settings"
          active={location.pathname === '/settings'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
      </Stack>
    </Box>
  );
}

export default Navbar;
