import { Box, Text, Badge } from '@mantine/core';
import './ProjectCard.css';

export default function ProjectCardFeatured({ project, onClick, isSelected = false }) {
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
      className="project-card featured"
      style={{
        width: '100%',
        maxWidth: '400px', // Wider for 16x9
        height: '375px', // Match ProjectCard height
        borderRadius: '18px',
        overflow: 'hidden',
        background: '#fffbe6',
        boxShadow: '0 8px 32px rgba(30,32,36,0.16)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        border: isSelected ? '3px solid #ffd700' : '1.5px solid #c1c8cd',
        position: 'relative',
        transition: 'transform 0.18s cubic-bezier(.4,1.2,.4,1)',
      }}
    >
      {/* Featured Star Icon */}
      <Box style={{ position: 'absolute', top: 14, left: 14, zIndex: 5 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </Box>

      {/* Poster Image - 16x9 ratio */}
      <Box
        style={{
          width: '100%',
          height: '265px', // Larger poster (16x9 for 400px width is ~225px, so this is ~18% larger)
          backgroundImage: poster
            ? `linear-gradient(rgba(30, 32, 36, 0.18), rgba(30, 32, 36, 0.18)), url(${poster})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '18px',
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
      <Box style={{ padding: '0.35rem 0.7rem 0.25rem 0.7rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.18rem' }}>
        <Text
          size="md"
          style={{
            fontWeight: 800,
            marginBottom: '3px',
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
            minHeight: '1.1em',
          }}
        >
          {`"${title}"`}
        </Text>
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2px', marginTop: '0px' }}>
          <Badge
            color={statusColors[status]}
            variant="filled"
            size="sm"
            style={{ fontSize: '12px', padding: '0 7px', boxShadow: status === 'completed' ? '0 2px 8px rgba(76,175,80,0.12)' : undefined, background: status === 'completed' ? '#4CAF50' : undefined, color: status === 'completed' ? '#fff' : undefined }}
          >
            {status === 'completed' && '✓'}
            {status === 'in-progress' && '⏳'}
            {status === 'archived' && '🗄️'}
            {status !== 'completed' && status !== 'in-progress' && status !== 'archived' && status.replace('-', ' ')}
          </Badge>
          <Text size="xs" style={{ color: '#888', fontSize: '9px', fontWeight: 500 }}>
            {new Date(lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </Text>
        </Box>
        {/* Additional Details - smaller */}
        {project.client && (
          <Text size="xs" style={{ color: '#555', textAlign: 'center', fontWeight: 500, marginTop: '2px' }}>
            <b>Client:</b> {project.client}
          </Text>
        )}
        {project.genre && (
          <Text size="xs" style={{ color: '#555', textAlign: 'center', fontWeight: 500, marginTop: '1px' }}>
            <b>Genre:</b> {project.genre}
          </Text>
        )}
        {project.team && (
          <Text size="xs" style={{ color: '#555', textAlign: 'center', fontWeight: 500, marginTop: '1px' }}>
            <b>Team:</b> {project.team.join(', ')}
          </Text>
        )}
      </Box>
    </Box>
  );
}
