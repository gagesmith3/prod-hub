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
      <Box style={{ textAlign: 'center', padding: '4rem' }}>
        <Text size="lg" style={{ color: '#666' }}>Loading projects...</Text>
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
      {/* Top Bar: Search, Filter, Sort */}
      <Box style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        margin: '0 auto 1.5rem auto',
        maxWidth: '1200px',
        padding: '0.5rem 0',
        background: 'none',
        borderRadius: 0,
        boxShadow: 'none',
      }}>
        <Box style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'flex-end',
        }}>
          <Box style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
            <Text size="sm" style={{ color: '#888', marginBottom: '0.25rem', marginLeft: '2px' }}>Search</Text>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects..."
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                background: '#fff',
                boxShadow: '0 1px 4px rgba(30,32,36,0.06)',
                minWidth: '180px',
              }}
            />
          </Box>
          <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Text size="sm" style={{ color: '#888', marginBottom: '0.25rem', marginLeft: '2px' }}>Filter</Text>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                background: '#fff',
                minWidth: '120px',
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
          <Box style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Text size="sm" style={{ color: '#888', marginBottom: '0.25rem', marginLeft: '2px' }}>Sort</Text>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                background: '#fff',
                minWidth: '120px',
              }}
            >
              <option value="name">Sort by Name</option>
              <option value="date">Sort by Date</option>
              <option value="status">Sort by Status</option>
            </select>
          </Box>
        </Box>
      </Box>

      {/* Featured Projects Row */}
      {featuredProjects.length > 0 && (
        <Box style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          margin: '0 auto 2.5rem auto',
          maxWidth: '900px',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
          {featuredProjects.map(project => (
            <ProjectCardFeatured
              key={project.id}
              project={project}
              onClick={onProjectClick}
              isSelected={selectedProjects.includes(project.id)}
            />
          ))}
        </Box>
      )}

      {/* Regular Project Grid */}
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem 2.5rem',
          marginTop: '1rem',
          justifyContent: 'center',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          overflow: 'visible',
          paddingBottom: '2rem',
        }}
      >
        {regularProjects.map((project) => (
          <Box
            key={project.id}
            style={{
              position: 'relative',
              flex: '0 1 250px',
              minWidth: '200px',
              maxWidth: '250px',
              margin: '0',
            }}
          >
            <ProjectCard
              project={project}
              onClick={onProjectClick}
              isSelected={selectedProjects.includes(project.id)}
            />
            {/* Empty star icon overlay for unfeatured */}
            <Box style={{ position: 'absolute', top: 14, left: 14, zIndex: 5 }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
