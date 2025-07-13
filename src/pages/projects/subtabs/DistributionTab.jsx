import { Paper, Title } from '@mantine/core';


export default function DistributionTab({ project }) {
  return (
    <Paper shadow="xs" radius="md" p="lg" mb="xl" withBorder>
      <Title order={4} mb="md">Distribution</Title>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
        <Section title="Publish Video" />
        <Section title="Review Video Metrics" />
      </div>
    </Paper>
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
