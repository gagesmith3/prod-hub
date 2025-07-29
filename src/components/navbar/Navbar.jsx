import { Box, Stack } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
// Modern Netflix/Hulu style icons with gradient colors

const HomeIcon = ({ active }) => (
  <svg width="24" height="24" fill="none" stroke={active ? "#10b981" : "#94a3b8"} strokeWidth="2.5" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <path d="M3 10.5L12 4l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const FolderIcon = ({ active }) => (
  <svg width="24" height="24" fill="none" stroke={active ? "#10b981" : "#94a3b8"} strokeWidth="2.5" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M3 7V5a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v2" />
  </svg>
);

const CalendarIcon = ({ active }) => (
  <svg width="24" height="24" fill="none" stroke={active ? "#10b981" : "#94a3b8"} strokeWidth="2.5" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const UsersIcon = ({ active }) => (
  <svg width="24" height="24" fill="none" stroke={active ? "#10b981" : "#94a3b8"} strokeWidth="2.5" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = ({ active }) => (
  <svg width="24" height="24" fill="none" stroke={active ? "#10b981" : "#94a3b8"} strokeWidth="2.5" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', display: 'block', margin: '0 auto' }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);


function Navbar({ mobile, onNavigate }) {
  const location = useLocation();
  const navItems = [
    { label: 'Dashboard', icon: HomeIcon, to: '/dashboard' },
    { label: 'Projects', icon: FolderIcon, to: '/projects' },
    { label: 'Calendar', icon: CalendarIcon, to: '/calendar' },
    { label: 'Team', icon: UsersIcon, to: '/team' },
    { label: 'Settings', icon: SettingsIcon, to: '/settings' },
  ];

  return (
    <Box
      style={{
        width: mobile ? '100%' : '100px',
        flexShrink: 0,
        background: mobile 
          ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)'
          : 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        backdropFilter: mobile ? 'blur(25px)' : 'blur(20px)',
        color: '#f8fafc',
        minHeight: '100vh',
        boxShadow: mobile ? 'none' : '8px 0 32px rgba(0,0,0,0.15), inset -1px 0 0 rgba(255,255,255,0.08)',
        borderRight: mobile ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '15px',
        position: 'relative',
        // Add subtle gradient overlay for depth
        '&::before': mobile ? {} : {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.02) 0%, transparent 100%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Stack gap="16px" style={{ alignItems: 'center', width: '100%', padding: '0 8px 20px 8px' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          const IconComponent = item.icon;
          
          return (
            <Link
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: mobile ? '64px' : '60px',
                width: mobile ? '100%' : '84px',
                maxWidth: mobile ? 'none' : '84px',
                background: isActive 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.15) 100%)'
                  : 'transparent',
                borderRadius: mobile ? '16px' : '18px',
                padding: mobile ? '12px 20px' : '8px 6px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isActive ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                textDecoration: 'none',
                // Add subtle glow effect for active items
                boxShadow: isActive 
                  ? '0 4px 20px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)' 
                  : 'none'
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = mobile ? 'translateX(6px)' : 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = mobile ? 'translateX(0px)' : 'translateY(0px)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: mobile ? '16px' : '6px', 
                width: '100%',
                padding: mobile ? '8px 0' : '2px 0'
              }}>
                <IconComponent active={isActive} />
                <span style={{ 
                  fontSize: mobile ? '16px' : '10px', 
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.025em',
                  color: isActive ? '#10b981' : '#94a3b8',
                  textAlign: 'center',
                  lineHeight: mobile ? '1.4' : '1.1'
                }}>
                  {item.label}
                </span>
              </div>
              
              {/* Active indicator */}
              {isActive && !mobile && (
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '-1px',
                  width: '60%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #10b981, #059669)',
                  borderRadius: '8px 8px 0 0',
                  boxShadow: '0 -2px 8px rgba(16, 185, 129, 0.4)',
                  animation: 'slideInBottom 0.3s ease'
                }} />
              )}
              {/* Mobile active indicator */}
              {isActive && mobile && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '4px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '0 8px 8px 0',
                  boxShadow: '2px 0 8px rgba(16, 185, 129, 0.3)',
                  animation: 'slideIn 0.3s ease'
                }} />
              )}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Navbar;
