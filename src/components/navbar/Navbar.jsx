import { Box, Stack, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconHome2, IconFolder, IconCalendar, IconUsers, IconSettings } from '@tabler/icons-react';

function Navbar() {
  const location = useLocation();
  return (
    <Box
      p="md"
      style={{
        width: '280px',
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
          leftSection={<IconHome2 size={28} style={{ marginRight: 12, verticalAlign: 'middle' }} />}
          component={Link}
          to="/dashboard"
          active={location.pathname === '/dashboard'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Projects</span>}
          leftSection={<IconFolder size={28} style={{ marginRight: 12, verticalAlign: 'middle' }} />}
          component={Link}
          to="/projects"
          active={location.pathname === '/projects'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Calendar</span>}
          leftSection={<IconCalendar size={28} style={{ marginRight: 12, verticalAlign: 'middle' }} />}
          component={Link}
          to="/calendar"
          active={location.pathname === '/calendar'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Team</span>}
          leftSection={<IconUsers size={28} style={{ marginRight: 12, verticalAlign: 'middle' }} />}
          component={Link}
          to="/team"
          active={location.pathname === '/team'}
          style={{ display: 'flex', alignItems: 'center', minHeight: 52 }}
        />
        <NavLink
          label={<span style={{ fontSize: 20 }}>Settings</span>}
          leftSection={<IconSettings size={28} style={{ marginRight: 12, verticalAlign: 'middle' }} />}
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
