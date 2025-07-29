import { Title, Text, Group, Badge, Divider } from '@mantine/core';

const infoItems = [
  { label: 'Client', value: 'client', icon: '👤' },
  { label: 'Genre', value: 'genre', icon: '🎞️' },
  { label: 'Start Date', value: 'dateStarted', icon: '📅' },
  { label: 'Goal Date', value: 'dateRequired', icon: '⏰' },
];

export default function ProjectDetailsCard({ project }) {
  return (
    <div style={{ 
      width: '100%', 
      minWidth: '600px', 
      maxWidth: '900px',
      height: '420px', // Match poster height (280px * 1.5 aspect ratio)
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
      borderRadius: '20px', 
      boxShadow: '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)', 
      padding: '2rem', 
      display: 'flex', 
      flexDirection: 'row',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
        borderRadius: '20px 20px 0 0'
      }} />
      
      {/* Left side - Title and Description */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Title order={1} style={{ 
            fontWeight: 900, 
            fontSize: '2.5rem', 
            color: '#1a202c', 
            marginBottom: '0.5rem', 
            letterSpacing: '-0.025em', 
            lineHeight: 1.1 
          }}>
            {project.title}
          </Title>
          
          <Text size="lg" style={{ 
            color: '#4a5568', 
            fontStyle: 'italic', 
            fontWeight: 500, 
            fontSize: '1.2rem', 
            lineHeight: 1.4, 
            marginBottom: '1rem'
          }}>
            "{project.description}"
          </Text>
        </div>
        
        {/* Bottom left - Stage and Status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            fontSize: '1.3rem', 
            fontWeight: 700, 
            color: '#1a202c',
            textAlign: 'left'
          }}>
            {project.stage && project.status ? `${project.stage} / ${project.status}` : project.stage || project.status || 'N/A'}
          </div>
        </div>
      </div>
      
      {/* Right side - Type/Genre and Info */}
      <div style={{ 
        minWidth: '280px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '1.5rem'
      }}>
        {/* Top right - Type and Genre */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.8rem' }}>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            color: '#1a202c',
            textAlign: 'right',
            lineHeight: 1.2
          }}>
            {project.type && project.genre ? `${project.type} / ${project.genre}` : project.type || project.genre || 'N/A'}
          </div>
        </div>
        
        {/* Middle right - Client and Due Date */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <div style={{ 
            fontSize: '1.3rem', 
            fontWeight: 700, 
            color: '#1a202c',
            textAlign: 'right'
          }}>
            <div>CLIENT(s)</div>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: '#64748b', marginTop: '0.2rem' }}>
              {project.client || 'N/A'}
            </div>
          </div>
          
          <div style={{ 
            fontSize: '1.3rem', 
            fontWeight: 700, 
            color: '#1a202c',
            textAlign: 'right'
          }}>
            <div>DUE DATE</div>
            <div style={{ fontSize: '1rem', fontWeight: 500, color: '#64748b', marginTop: '0.2rem' }}>
              {project.dateRequired || 'N/A'}
            </div>
          </div>
        </div>
        
        {/* Bottom right corner - Team name and logo */}
        <div style={{ 
          fontSize: '1.1rem', 
          fontWeight: 600, 
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          textAlign: 'right'
        }}>
          <span>{project.team ? project.team.join(' + ') : 'Team'}</span>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: '#fff',
            fontWeight: 'bold'
          }}>
            🎬
          </div>
        </div>
      </div>
    </div>
  );
}
