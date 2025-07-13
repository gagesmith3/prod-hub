import { Box, Drawer, Burger } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './MainLayout.css'; // Import custom CSS for scrollbar styling


export default function MainLayout({ children }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      overflow: 'hidden', // Prevent scrolling on the outer shell
    }}>
      <Header />
      <Box style={{
        display: 'flex',
        flex: 1,
        background: '#f6f8fa',
        minHeight: 0,
        overflow: 'hidden',
        position: 'relative',
      }}>
        {isMobile ? (
          <>
            <Burger
              opened={drawerOpened}
              onClick={() => setDrawerOpened((o) => !o)}
              size={28}
              color="#222"
              style={{ position: 'absolute', top: 18, left: 18, zIndex: 100 }}
              aria-label="Open navigation"
            />
            <Drawer
              opened={drawerOpened}
              onClose={() => setDrawerOpened(false)}
              padding="md"
              size="80vw"
              overlayOpacity={0.55}
              overlayBlur={2}
              zIndex={200}
            >
              <Navbar mobile onNavigate={() => setDrawerOpened(false)} />
            </Drawer>
          </>
        ) : (
          <Navbar />
        )}
        <Box component="main" className="main-content" style={{
          flex: 1,
          padding: isMobile ? '1rem' : '2.5rem 3.5rem 2.5rem 1.5rem',
          background: '#fff',
          borderRadius: isMobile ? '0' : '12px',
          margin: isMobile ? '0' : '1.5rem 2rem 1.5rem 1.5rem', // Add right margin for desktop
          boxShadow: isMobile ? 'none' : '0 2px 16px rgba(0,0,0,0.07)',
          minWidth: 0,
          height: 'auto',
          color: '#222',
          overflow: 'auto',
          maxHeight: isMobile ? '100vh' : 'calc(100vh - 7rem)',
          maxWidth: isMobile ? '100vw' : 'calc(100vw - 80px)',
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
