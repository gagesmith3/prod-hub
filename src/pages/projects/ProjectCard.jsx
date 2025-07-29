import { Text } from '@mantine/core';

export default function ProjectCard({ project, onClick, isSelected = false, featured = false }) {
  const { title, poster, status, lastModified } = project;

  const getStatusConfig = (status) => {
    const configs = {
      'completed': { color: '#10b981', icon: '✓' },
      'in-progress': { color: '#3b82f6', icon: '▶️' },
      'on-hold': { color: '#f59e0b', icon: '⏸️' },
      'archived': { color: '#64748b', icon: '📦' },
      'draft': { color: '#6b7280', icon: '📝' }
    };
    return configs[status] || configs['draft'];
  };

  return (
    <div
      onClick={() => onClick?.(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Project: ${title}, Status: ${status}`}
      style={{
        width: '100%',
        maxWidth: '280px',
        aspectRatio: '2/3', // Movie poster aspect ratio
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: isSelected ? 'scale(1.08)' : 'scale(1)',
        boxShadow: isSelected 
          ? '0 12px 40px rgba(0,0,0,0.3), 0 0 0 3px #3b82f6' 
          : '0 4px 20px rgba(0,0,0,0.15)',
        background: poster
          ? `url(${poster}) center/cover no-repeat`
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        }
      }}
    >
      {/* Dark overlay gradient (Netflix style) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)',
        zIndex: 1
      }} />

      {/* Featured star - top left (only if featured) */}
      {featured && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 3,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
        }}>
          <span style={{ color: '#fff', fontSize: '10px' }}>⭐</span>
        </div>
      )}

      {/* Selection indicator - top right */}
      {isSelected && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 3,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
        }}>
          <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>✓</span>
        </div>
      )}

      {/* Status indicator - top right corner */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: isSelected ? '40px' : '10px',
        zIndex: 3,
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: getStatusConfig(status).color,
        boxShadow: '0 0 0 2px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.2)'
      }} />

      {/* Bottom content overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        zIndex: 2,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 70%, transparent 100%)'
      }}>
        {/* Title */}
        <div style={{
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 700,
          marginBottom: '8px',
          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          lineHeight: 1.2,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {title}
        </div>

        {/* Metadata row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          {/* Status badge */}
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '14px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{ fontSize: '10px' }}>{getStatusConfig(status).icon}</span>
            <span style={{
              color: '#fff',
              fontSize: '10px',
              fontWeight: 600,
              textTransform: 'capitalize'
            }}>
              {status.replace('-', ' ')}
            </span>
          </div>

          {/* Date */}
          <div style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '10px',
            fontWeight: 500
          }}>
            {new Date(lastModified).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Project details */}
        <div style={{
          display: 'flex',
          gap: '10px',
          fontSize: '10px',
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 500
        }}>
          {project.genre && (
            <span>{project.genre}</span>
          )}
          {project.client && project.genre && (
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>•</span>
          )}
          {project.client && (
            <span>{project.client}</span>
          )}
        </div>
      </div>

      {/* Fallback content when no poster */}
      {!poster && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div style={{
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            padding: '15px',
            lineHeight: 1.2
          }}>
            {title}
          </div>
        </div>
      )}
    </div>
  );
}

