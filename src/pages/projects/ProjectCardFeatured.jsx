import { Box, Text, Badge } from '@mantine/core';

export default function ProjectCardFeatured({ project, onClick, isSelected = false }) {
  const { id, title, poster, status, lastModified, client, genre, team } = project;

  const statusColors = {
    'in-progress': '#4CAF50',
    'completed': '#2196F3',
    'on-hold': '#FF9800',
    'draft': '#9E9E9E',
  };

  return (
    <Box
      onClick={() => onClick?.(project)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        background: '#fffbe6',
        boxShadow: '0 8px 32px rgba(30,32,36,0.16)',
        borderRadius: '18px',
        overflow: 'hidden',
        border: isSelected ? '3px solid #ffd700' : '1.5px solid #c1c8cd',
        minHeight: '180px',
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        transition: 'transform 0.18s cubic-bezier(.4,1.2,.4,1)',
      }}
    >
      {/* Poster Image Horizontal */}
      <Box
        style={{
          width: '180px',
          minWidth: '180px',
          height: '100%',
          aspectRatio: '16/9',
          backgroundImage: poster
            ? `linear-gradient(rgba(30, 32, 36, 0.18), rgba(30, 32, 36, 0.18)), url(${poster})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '18px 0 0 18px',
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(30,32,36,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!poster && (
          <Text size="lg" style={{ color: '#fff', fontWeight: 700, textAlign: 'center', padding: '1.5rem 1rem', fontSize: '1.25rem', letterSpacing: '0.5px' }}>
            {`"${title}"`}
          </Text>
        )}
      </Box>
      {/* Details Section */}
      <Box style={{ flex: 1, padding: '1.2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.5rem' }}>
        <Text size="xl" style={{ fontWeight: 800, color: '#222', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>{title}</Text>
        <Box style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Badge color={statusColors[status]} variant="filled" size="md" style={{ fontSize: '15px', padding: '0 10px' }}>
            {status === 'completed' && '✓'}
            {status === 'in-progress' && '⏳'}
            {status === 'archived' && '🗄️'}
            {status !== 'completed' && status !== 'in-progress' && status !== 'archived' && status.replace('-', ' ')}
          </Badge>
          <Text size="xs" style={{ color: '#888', fontSize: '11px', fontWeight: 500 }}>
            {new Date(lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </Text>
        </Box>
        <Text size="sm" style={{ color: '#555', marginBottom: '0.25rem' }}><b>Client:</b> {client}</Text>
        <Text size="sm" style={{ color: '#555', marginBottom: '0.25rem' }}><b>Genre:</b> {genre}</Text>
        <Text size="sm" style={{ color: '#555', marginBottom: '0.25rem' }}><b>Team:</b> {team && team.join(', ')}</Text>
      </Box>
      {/* Featured Star */}
      <Box style={{ position: 'absolute', top: 14, left: 14, zIndex: 5 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </Box>
    </Box>
  );
}
