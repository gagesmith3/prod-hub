import { Box, Text, Badge } from '@mantine/core';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick, isSelected = false }) {
  const { id, title, poster, status, lastModified } = project;

  const statusColors = {
    'in-progress': '#4CAF50',
    'completed': '#2196F3',
    'on-hold': '#FF9800',
    'draft': '#9E9E9E',
  };

  return (
    <Box
      onClick={() => onClick?.(project)}
      className="project-card"
      style={{
        width: '100%',
        maxWidth: '250px', // Constrain the card width
        borderRadius: '18px', // Unified rounding
        overflow: 'hidden',
        background: '#f7f8fa', // Subtle card background
        boxShadow: '0 8px 32px rgba(30,32,36,0.16)', // Enhanced shadow
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        border: isSelected ? '3px solid #ffd700' : '1.5px solid #c1c8cd',
      }}
    >
      {/* Poster Image */}
      <Box
        style={{
          width: '100%',
          aspectRatio: '2/3', // Movie poster ratio
          backgroundImage: poster
            ? `linear-gradient(rgba(30, 32, 36, 0.18), rgba(30, 32, 36, 0.18)), url(${poster})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '18px', // Match card rounding
          overflow: 'hidden',
          boxShadow: '0 4px 16px rgba(30,32,36,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0',
          minHeight: '0',
        }}
      >
        {!poster && (
          <Text size="lg" style={{ color: '#fff', fontWeight: 700, textAlign: 'center', padding: '1.5rem 1rem', fontSize: '1.25rem', letterSpacing: '0.5px' }}>
            {`"${title}"`}
          </Text>
        )}
        
        {/* Selection Indicator */}
        {isSelected && (
          <Box
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#ffd700',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #fff',
              zIndex: 3,
            }}
          >
            <Text style={{ color: '#222', fontWeight: 700, fontSize: '16px' }}>✓</Text>
          </Box>
        )}
      </Box>

      {/* Project Info Below Poster */}
      <Box style={{ padding: '1rem 1rem 0.5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Text
          size="lg"
          style={{
            fontWeight: 700,
            marginBottom: '10px',
            color: '#222',
            textAlign: 'center',
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            letterSpacing: '0.5px',
            fontSize: '1.15rem',
            minHeight: '2.6em', // Reserve space for 2 lines
          }}
        >
          {`"${title}"`}
        </Text>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
          <Badge
            color={statusColors[status]}
            variant="filled"
            size="md"
            style={{ fontSize: '15px', padding: '0 10px', boxShadow: status === 'completed' ? '0 2px 8px rgba(76,175,80,0.12)' : undefined, background: status === 'completed' ? '#4CAF50' : undefined, color: status === 'completed' ? '#fff' : undefined }}
          >
            {status === 'completed' && '✓'}
            {status === 'in-progress' && '⏳'}
            {status === 'archived' && '🗄️'}
            {status !== 'completed' && status !== 'in-progress' && status !== 'archived' && status.replace('-', ' ')}
          </Badge>
          <Text size="xs" style={{ color: '#888', fontSize: '11px', fontWeight: 500 }}>
            {new Date(lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
