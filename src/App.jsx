import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/Projects';
import Calendar from './pages/calendar/Calendar';
import Team from './pages/team/Team';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import ViewProject from './pages/projects/ViewProject';
import { MantineProvider } from '@mantine/core';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Router basename="/prod-hub">
        <MainLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ViewProject />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<><h2>Settings</h2><p>Configure your suite preferences.</p></>} />
          </Routes>
        </MainLayout>
      </Router>
    </MantineProvider>
  );
}

export default App
