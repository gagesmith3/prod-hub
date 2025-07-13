import { Box } from '@mantine/core';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './MainLayout.css'; // Import custom CSS for scrollbar styling


export default function MainLayout({ children }) {
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
        overflow: 'hidden', // Prevent scrolling on the layout shell
      }}>
        <Navbar />
        <Box component="main" className="main-content" style={{
          flex: 1,
          padding: '2rem',
          background: '#fff',
          borderRadius: '8px',
          margin: '2rem 2rem 2rem 2rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          minWidth: 0,
          height: 'auto',
          color: '#222',
          overflow: 'auto', // Only main content scrolls
          maxHeight: 'calc(100vh - 8rem)',
          maxWidth: 'calc(100vw - 200px - 6rem)',
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
