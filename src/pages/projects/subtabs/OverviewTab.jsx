import { Paper, Title, Text, Group, Badge } from '@mantine/core';


export default function OverviewTab({ project }) {
  return (
    <Paper shadow="md" radius="lg" p="xl" mb="xl" withBorder>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
        {/* Poster Image */}
        <div style={{
          width: '320px',
          minWidth: '220px',
          aspectRatio: '2/3',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(30,32,36,0.16)',
          background: project.poster
            ? `linear-gradient(rgba(30, 32, 36, 0.18), rgba(30, 32, 36, 0.18)), url(${project.poster}) center/cover no-repeat`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {!project.poster && (
            <Text size="xl" style={{ color: '#fff', textAlign: 'center', width: '100%' }}>
              No Poster
            </Text>
          )}
        </div>
        {/* Details */}
        <div style={{ flex: 1 }}>
          <Group position="apart" mb="sm">
            <Title order={2}>{project.title}</Title>
            <Badge color="blue" size="lg">{project.type || 'Project'}</Badge>
          </Group>
          <Text size="md" style={{ color: '#555', marginBottom: '1rem' }}>
            {project.description}
          </Text>
          <Group spacing="xl" mb="sm">
            <Text size="sm" style={{ color: '#888' }}>
              <strong>Client:</strong> {project.client || 'N/A'}
            </Text>
            <Text size="sm" style={{ color: '#888' }}>
              <strong>Genre:</strong> {project.genre || 'N/A'}
            </Text>
            <Text size="sm" style={{ color: '#888' }}>
              <strong>Start Date:</strong> {project.dateStarted || 'N/A'}
            </Text>
            <Text size="sm" style={{ color: '#888' }}>
              <strong>Goal Date:</strong> {project.dateRequired || 'N/A'}
            </Text>
          </Group>
        </div>
      </div>
    </Paper>
  );
}
