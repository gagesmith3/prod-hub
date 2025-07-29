import { Paper, Text } from '@mantine/core';
import ProjectDetailsCard from './ProjectDetailsCard';

export default function OverviewTab({ project }) {
  return (
    <Paper shadow="md" radius="lg" p="xl" mb="xl" withBorder>
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'flex-start', 
        flexWrap: 'nowrap',
        minHeight: '400px'
      }}>
        {/* Poster Image */}
        <div style={{
          width: '280px',
          minWidth: '280px',
          flexShrink: 0,
          aspectRatio: '2/3',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(30,32,36,0.16)',
          background: project.poster
            ? `linear-gradient(rgba(30, 32, 36, 0.18), rgba(30, 32, 36, 0.18)), url(${project.poster}) center/cover no-repeat`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2.5px solid #eaeaea',
          transition: 'box-shadow 0.2s',
        }}>
          {!project.poster && (
            <Text size="xl" style={{ color: '#fff', textAlign: 'center', width: '100%' }}>
              No Poster
            </Text>
          )}
        </div>
        {/* Details */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <ProjectDetailsCard project={project} />
        </div>
      </div>
    </Paper>
  );
}
