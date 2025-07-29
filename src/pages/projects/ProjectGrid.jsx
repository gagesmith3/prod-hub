import React from 'react';
import { Box, SimpleGrid, Text } from '@mantine/core';
import ProjectCard from './ProjectCard';
import ProjectCardFeatured from './ProjectCardFeatured';
import { IconStarFilled } from '@tabler/icons-react';

export default function ProjectGrid({ 
  projects = [],
  onProjectClick,
  selectedProjects = [],
  isLoading = false
}) {
  // Example: mark projects with project.featured === true as featured
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);
  // Local state for search, sort, filter
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('name');
  const [filter, setFilter] = React.useState('all');
  if (isLoading) {
    return (
      <Box style={{ 
        textAlign: 'center', 
        padding: '4rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        borderRadius: '16px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem auto'
        }}></div>
        <Text size="lg" style={{ 
          color: '#475569',
          fontWeight: 600
        }}>
          Loading projects...
        </Text>
      </Box>
    );
  }

  // Filter, search, and sort logic
  let visibleProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || p.status === filter;
    return matchesSearch && matchesFilter;
  });
  if (sort === 'name') {
    visibleProjects = [...visibleProjects].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === 'date') {
    visibleProjects = [...visibleProjects].sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
  } else if (sort === 'status') {
    visibleProjects = [...visibleProjects].sort((a, b) => a.status.localeCompare(b.status));
  }

  if (visibleProjects.length === 0) {
    return (
      <Box style={{ textAlign: 'center', padding: '4rem', background: '#f8f9fa', borderRadius: '12px', border: '2px dashed #ddd' }}>
        <Text size="xl" style={{ color: '#666', marginBottom: '1rem' }}>No projects found</Text>
        <Text style={{ color: '#888' }}>Try adjusting your search or filters.</Text>
      </Box>
    );
  }

  return (
    <>
      {/* Netflix-style Search & Filter Bar */}
      <Box style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(15,23,42,0.8) 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '32px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <Box style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '20px',
          alignItems: 'end',
        }}>
          {/* Search Input */}
          <Box>
            <Text size="sm" style={{ 
              color: '#e2e8f0', 
              marginBottom: '8px', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '11px'
            }}>
              🔍 Search Projects
            </Text>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Find your next project..."
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '16px',
                background: 'rgba(255,255,255,0.05)',
                color: '#f8fafc',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid #e50914';
                e.target.style.boxShadow = '0 0 0 3px rgba(229,9,20,0.1)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(255,255,255,0.1)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </Box>

          {/* Filter Dropdown */}
          <Box>
            <Text size="sm" style={{ 
              color: '#e2e8f0', 
              marginBottom: '8px', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '11px'
            }}>
              📊 Filter
            </Text>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.05)',
                color: '#f8fafc',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="all">All Statuses</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
              <option value="on-hold">On Hold</option>
              <option value="draft">Draft</option>
            </select>
          </Box>

          {/* Sort Dropdown */}
          <Box>
            <Text size="sm" style={{ 
              color: '#e2e8f0', 
              marginBottom: '8px', 
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontSize: '11px'
            }}>
              🔄 Sort
            </Text>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '14px',
                background: 'rgba(255,255,255,0.05)',
                color: '#f8fafc',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="name">By Name</option>
              <option value="date">By Date</option>
              <option value="status">By Status</option>
            </select>
          </Box>
        </Box>
      </Box>

      {/* Netflix-style Project Grid */}
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '2rem',
          padding: '0 8px'
        }}
      >
        {visibleProjects.filter(p => !p.featured).map((project) => (
          <Box
            key={project.id}
            style={{
              position: 'relative',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.zIndex = '10';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.zIndex = '1';
            }}
          >
            <ProjectCard
              project={project}
              onClick={onProjectClick}
              isSelected={selectedProjects.includes(project.id)}
            />
          </Box>
        ))}
      </Box>

      {/* Show message if no projects match filters */}
      {visibleProjects.filter(p => !p.featured).length === 0 && (
        <Box style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(15,23,42,0.6) 100%)',
          borderRadius: '16px',
          border: '2px dashed rgba(255,255,255,0.1)',
          margin: '2rem 0',
          backdropFilter: 'blur(10px)'
        }}>
          <Text size="xl" style={{ 
            color: '#e2e8f0', 
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            🎬 No projects found
          </Text>
          <Text size="md" style={{ color: '#94a3b8' }}>
            Try adjusting your search terms or filters to find what you're looking for.
          </Text>
        </Box>
      )}
    </>
  );
}
