import { Box, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { mockProjects } from '../../data/mockData';
import { useState } from 'react';
import ProjectSectionTabs from './ProjectSectionTabs';
import OverviewTab from './subtabs/OverviewTab';
import PreProductionTab from './subtabs/PreProductionTab';
import ProductionTab from './subtabs/ProductionTab';
import PostProductionTab from './subtabs/PostProductionTab';
import DistributionTab from './subtabs/DistributionTab';
import ResourcesTab from './subtabs/ResourcesTab';
import SettingsTab from './subtabs/SettingsTab';

export default function ViewProject() {
  const { projectId } = useParams();
  const project = mockProjects.find(p => String(p.id) === String(projectId));
  const navSections = [
    'Overview',
    'Pre-Production',
    'Production',
    'Post-Production',
    'Distribution',
    'Resources',
    'Settings',
  ];
  const [activeSection, setActiveSection] = useState('Overview');

  if (!project) {
    return (
      <Box style={{ 
        textAlign: 'center', 
        padding: '4rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        borderRadius: '16px',
        border: '2px dashed #cbd5e1',
        margin: '2rem auto',
        maxWidth: '600px'
      }}>
        <Text size="xl" style={{ 
          color: '#475569', 
          marginBottom: '1rem',
          fontWeight: 600
        }}>
          Project not found
        </Text>
        <Text size="md" style={{ color: '#64748b' }}>
          The project with ID "{projectId}" could not be found. Please check the URL or return to the projects page.
        </Text>
      </Box>
    );
  }

  return (
    <Box style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Tab bar at the very top of main content */}
      <ProjectSectionTabs
        sections={navSections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Section Content */}
      {activeSection === 'Overview' && <OverviewTab project={project} />}
      {activeSection === 'Pre-Production' && <PreProductionTab project={project} />}
      {activeSection === 'Production' && <ProductionTab project={project} />}
      {activeSection === 'Post-Production' && <PostProductionTab project={project} />}
      {activeSection === 'Distribution' && <DistributionTab project={project} />}
      {activeSection === 'Resources' && <ResourcesTab project={project} />}
      {activeSection === 'Settings' && <SettingsTab project={project} />}
    </Box>
  );
}