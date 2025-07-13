import { Box } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';
import BulkActions from '../../components/common/BulkActions';
import ProjectGrid from './ProjectGrid';
import FeaturedProjectGrid from './FeaturedProjectGrid';
import { mockProjects } from '../../data/mockData';

export default function Projects() {
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isBulkMode, setIsBulkMode] = useState(false);

  // Split featured and regular projects
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);
  const navigate = useNavigate();

  // Filter projects based on search
  const filteredProjects = regularProjects.filter(project =>
    project.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleProjectClick = (project) => {
    if (isBulkMode) {
      setSelectedProjects(prev =>
        prev.includes(project.id)
          ? prev.filter(id => id !== project.id)
          : [...prev, project.id]
      );
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const handleCreateNew = () => {
    console.log('Create new project');
    // Implement create new project modal/page
  };

  const handleToggleBulkMode = () => {
    setIsBulkMode(!isBulkMode);
    if (isBulkMode) {
      setSelectedProjects([]); // Clear selections when exiting bulk mode
    }
  };

  const handleDeleteSelected = () => {
    setProjects(prev => prev.filter(project => !selectedProjects.includes(project.id)));
    setSelectedProjects([]);
    console.log('Deleted projects:', selectedProjects);
  };

  const handleArchiveSelected = () => {
    // In a real app, you'd update the status to 'archived'
    console.log('Archived projects:', selectedProjects);
    setSelectedProjects([]);
  };

  return (
    <Box>
      <PageHeader
        title="Projects"
        actions={[
          {
            label: '+ Create New Project',
            onClick: handleCreateNew,
            variant: 'primary',
          },
          {
            label: isBulkMode ? 'Cancel Bulk Edit' : 'Bulk Edit',
            onClick: handleToggleBulkMode,
            variant: 'secondary',
            disabled: !isBulkMode && selectedProjects.length === 0,
          },
        ]}
      >
        {/* Bulk Actions Bar */}
        {isBulkMode && (
          <BulkActions
            selectedCount={selectedProjects.length}
            actions={[
              {
                label: 'Archive',
                onClick: handleArchiveSelected,
                variant: 'secondary',
              },
              {
                label: 'Delete',
                onClick: handleDeleteSelected,
                variant: 'danger',
              },
            ]}
            onCancel={handleToggleBulkMode}
          />
        )}
      </PageHeader>

      {/* Featured Project Grid */}
      <FeaturedProjectGrid
        projects={featuredProjects}
        onProjectClick={handleProjectClick}
        selectedProjects={selectedProjects}
      />

      {/* Project Grid Search/Sort/Filter and Standard Grid */}
      <ProjectGrid
        projects={filteredProjects}
        onProjectClick={handleProjectClick}
        selectedProjects={selectedProjects}
        isLoading={false}
      />
    </Box>
  );
}
