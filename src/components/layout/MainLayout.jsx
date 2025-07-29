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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Dark Netflix-style background
    }}>
      <Header />
      <Box style={{
        display: 'flex',
        flex: 1,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
              color="#94a3b8"
              style={{ 
                position: 'absolute', 
                top: 18, 
                left: 18, 
                zIndex: 100,
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '8px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease'
              }}
              aria-label="Open navigation"
            />
            <Drawer
              opened={drawerOpened}
              onClose={() => setDrawerOpened(false)}
              padding="md"
              size="85vw"
              overlayOpacity={0.7}
              overlayBlur={12}
              zIndex={200}
              styles={{
                drawer: {
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  border: 'none',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                },
                header: {
                  background: 'transparent',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                },
                closeButton: {
                  color: '#94a3b8',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              <Navbar mobile onNavigate={() => setDrawerOpened(false)} />
            </Drawer>
          </>
        ) : (
          <Navbar />
        )}
        <Box component="main" className="main-content" style={{
          flex: 1,
          padding: 0, // Remove padding to let individual pages handle their own spacing
          background: 'transparent', // Let the dark background show through
          borderRadius: 0,
          margin: 0,
          boxShadow: 'none',
          minWidth: 0,
          height: 'auto',
          color: '#f8fafc',
          overflow: 'auto',
          maxHeight: '100vh',
          maxWidth: isMobile ? '100vw' : 'calc(100vw - 120px)', // Account for new smaller sidebar width
          position: 'relative',
          // Add subtle inner shadow for depth
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1
          }
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
