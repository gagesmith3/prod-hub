import { Group, Button, Box } from '@mantine/core';

const productionTabs = [
  'Pre-Production',
  'Production',
  'Post-Production',
  'Distribution',
];


export default function ProjectSectionTabs({ sections, activeSection, onSectionChange }) {
  // Split tabs into overview, production, and utility
  const overviewTab = sections.find(s => s === 'Overview');
  const prodTabs = sections.filter(s => productionTabs.includes(s));
  const utilTabs = sections.filter(s => !productionTabs.includes(s) && s !== 'Overview');

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        width: '100%',
        gap: 0,
      }}
    >
      {/* Overview tab: far left */}
      <Box style={{ display: 'flex', gap: '1rem', flex: 1 }}>
        {overviewTab && (
          <Button
            key={overviewTab}
            variant={activeSection === overviewTab ? 'filled' : 'subtle'}
            color="gray"
            size="md"
            style={{ fontWeight: 500 }}
            onClick={() => onSectionChange(overviewTab)}
          >
            {overviewTab}
          </Button>
        )}
      </Box>
      {/* Production tabs: center */}
      <Box style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flex: 2 }}>
        {prodTabs.map(section => (
          <Button
            key={section}
            variant={activeSection === section ? 'filled' : 'outline'}
            color="blue"
            size="md"
            style={{
              fontWeight: 500,
              borderWidth: 2,
              background: activeSection === section ? '#2966acff' : undefined,
            }}
            onClick={() => onSectionChange(section)}
          >
            {section}
          </Button>
        ))}
      </Box>
      {/* Utility tabs: far right */}
      <Box style={{ display: 'flex', gap: '1rem', flex: 1, justifyContent: 'flex-end' }}>
        {utilTabs.map(section => (
          <Button
            key={section}
            variant={activeSection === section ? 'filled' : 'subtle'}
            color="gray"
            size="md"
            style={{
              fontWeight: 500,
              opacity: 0.7,
              background: activeSection === section ? '#f4f4f4' : undefined,
            }}
            onClick={() => onSectionChange(section)}
          >
            {section}
          </Button>
        ))}
      </Box>
    </Box>
  );
}