import { Paper, Title } from '@mantine/core';



export default function PreProductionTab({ project }) {
  return (
    <Paper shadow="xs" radius="md" p="lg" mb="xl" withBorder>
      <Title order={4} mb="md">Pre-Production</Title>
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <Category title="STORY">
          <Section title="Scripts" />
          <Section title="Breakdown" />
          <Section title="Notes" />
          <Section title="Storyboards" />
          <Section title="Shot Lists" />
        </Category>
        <Category title="SHOOT">
          <Section title="Contacts" />
          <Section title="Call Sheets" />
          <Section title="Locations" />
          <Section title="Sides" />
        </Category>
      </div>
    </Paper>
  );
}

function Category({ title, children }) {
  return (
    <div style={{ minWidth: '260px', flex: 1 }}>
      <Title order={5} style={{ marginBottom: '1rem', color: '#333', letterSpacing: '0.04em' }}>{title}</Title>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        {children}
      </div>
    </div>
  );
}

function Section({ title }) {
  return (
    <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '1rem', minHeight: '80px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
      <Title order={6} style={{ marginBottom: '0.5rem', color: '#555' }}>{title}</Title>
      {/* Placeholder for future content */}
      <span style={{ color: '#aaa', fontSize: '0.95em' }}>No data yet</span>
    </div>
  );
}
