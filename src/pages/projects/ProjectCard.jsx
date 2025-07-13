import { Box, Text, Badge } from '@mantine/core';
import './ProjectCard.css';

export default function ProjectCard({ project, onClick, isSelected = false, featured = false }) {
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
      className={`project-card${featured ? ' featured' : ''}`}
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
        position: 'relative',
        transition: 'transform 0.18s cubic-bezier(.4,1.2,.4,1)',
      }}
    >
      {/* Star Icon (featured or unfeatured) - only render for unfeatured if not already rendered externally */}
      {!featured && (
        <Box style={{ position: 'absolute', top: 14, left: 14, zIndex: 5, transition: 'transform 0.18s cubic-bezier(.4,1.2,.4,1)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </Box>
      )}
      {featured && (
        <Box style={{ position: 'absolute', top: 14, left: 14, zIndex: 5, transition: 'transform 0.18s cubic-bezier(.4,1.2,.4,1)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))' }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </Box>
      )}
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

      {/* Project Info Below Poster - Shorter Detail Section */}
      <Box style={{ padding: '0.6rem 1rem 0.4rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <Text
          size="md"
          style={{
            fontWeight: 700,
            marginBottom: '6px',
            color: '#222',
            textAlign: 'center',
            lineHeight: 1.15,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal',
            letterSpacing: '0.5px',
            fontSize: '1rem',
            minHeight: '1.3em', // Reserve space for 1 line
          }}
        >
          {`"${title}"`}
        </Text>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '4px', marginTop: '0px' }}>
          <Badge
            color={statusColors[status]}
            variant="filled"
            size="sm"
            style={{ fontSize: '13px', padding: '0 8px', boxShadow: status === 'completed' ? '0 2px 8px rgba(76,175,80,0.12)' : undefined, background: status === 'completed' ? '#4CAF50' : undefined, color: status === 'completed' ? '#fff' : undefined }}
          >
            {status === 'completed' && '✓'}
            {status === 'in-progress' && '⏳'}
            {status === 'archived' && '🗄️'}
            {status !== 'completed' && status !== 'in-progress' && status !== 'archived' && status.replace('-', ' ')}
          </Badge>
          <Text size="xs" style={{ color: '#888', fontSize: '10px', fontWeight: 500 }}>
            {new Date(lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
