import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Dashboard from './pages/Dashboard';
import { Box } from '@mantine/core';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          NavLink: {
            styles: (theme, params) => ({
              root: {
                color: params.active ? '#ffd700' : '#fff',
                fontWeight: params.active ? 'bold' : 'normal',
                background: 'transparent',
              },
              label: {
                color: params.active ? '#ffd700' : '#fff',
              },
            }),
          },
        },
      }}
    >
      <Router>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh',
            fontFamily: 'Segoe UI, Arial, sans-serif',
          }}
        >
          <Header />
          <Box
            style={{
              display: 'flex',
              flex: 1,
              background: '#f6f8fa',
              minHeight: 0,
            }}
          >
            <Navbar />
            <Box
              component="main"
              style={{
                flex: 1,
                padding: '2rem',
                background: '#fff',
                borderRadius: '8px',
                margin: '2rem 0 2rem 2rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                minWidth: 0,
                height: 'auto',
                color: '#222',
              }}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<><h2>Projects</h2><p>Manage your video projects here.</p></>} />
                <Route path="/tasks" element={<><h2>Tasks</h2><p>Track and assign tasks for your team.</p></>} />
                <Route path="/team" element={<><h2>Team</h2><p>View and manage your team members.</p></>} />
                <Route path="/settings" element={<><h2>Settings</h2><p>Configure your suite preferences.</p></>} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </MantineProvider>
  );
}

export default App
