import React from 'react';
import { Box } from '@mantine/core';
import ProjectCardFeatured from './ProjectCardFeatured';

export default function FeaturedProjectGrid({ projects = [], onProjectClick, selectedProjects = [] }) {
  if (!projects.length) return null;
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '2rem',
      margin: '0 auto 2.5rem auto',
      maxWidth: '100%',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexWrap: 'wrap',
    }}>
      {projects.map(project => (
        <ProjectCardFeatured
          key={project.id}
          project={project}
          onClick={onProjectClick}
          isSelected={selectedProjects.includes(project.id)}
        />
      ))}
    </Box>
  );
}
