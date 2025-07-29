import { Box } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BulkActions from '../../components/common/BulkActions';
import HeroHeader from '../../components/common/HeroHeader';
import ProjectGrid from './ProjectGrid';
import FeaturedCarousel from './FeaturedCarousel';
import { mockProjects } from '../../data/mockData';

export default function Projects() {
  const [projects, setProjects] = useState(mockProjects);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isBulkMode, setIsBulkMode] = useState(false);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Split featured and regular projects
  const featuredProjects = projects.filter(p => p.featured);
  const navigate = useNavigate();

  // Auto-cycle through featured projects every 8 seconds
  useEffect(() => {
    if (featuredProjects.length > 1) {
      const interval = setInterval(() => {
        setCurrentFeaturedIndex(prev => (prev + 1) % featuredProjects.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [featuredProjects.length]);

  const nextFeatured = () => {
    setCurrentFeaturedIndex(prev => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

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
    <Box style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      paddingTop: 0
    }}>
      {/* Netflix-style Hero Section */}
      <Box style={{
        background: 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.95) 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <Box style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '32px 24px'
        }}>
          <HeroHeader 
            title="Project Hub"
            subtitle={`${projects.length} active projects • ${featuredProjects.length} featured productions`}
            gradient="linear-gradient(135deg, #e50914 0%, #f40612 50%, #ff6b6b 100%)"
            buttons={[
              {
                label: '▶ Create Project',
                primary: true,
                onClick: handleCreateNew
              },
              {
                label: isBulkMode ? '✕ Cancel' : '⚡ Bulk Edit',
                primary: false,
                onClick: handleToggleBulkMode
              }
            ]}
          />
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '32px 24px 64px 24px'
      }}>
        {/* Netflix-style Bulk Actions */}
        {isBulkMode && (
          <Box style={{
            background: 'linear-gradient(135deg, rgba(229,9,20,0.1) 0%, rgba(244,6,18,0.05) 100%)',
            borderRadius: '16px',
            padding: '20px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(229,9,20,0.2)',
            marginBottom: '32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <BulkActions
              selectedCount={selectedProjects.length}
              actions={[
                {
                  label: '📁 Archive',
                  onClick: handleArchiveSelected,
                  variant: 'secondary',
                },
                {
                  label: '🗑️ Delete',
                  onClick: handleDeleteSelected,
                  variant: 'danger',
                },
              ]}
              onCancel={handleToggleBulkMode}
            />
          </Box>
        )}

        {/* Netflix-style Featured Hero Banner */}
        {featuredProjects.length > 0 && (
          <Box style={{ marginBottom: '48px' }}>
            {(() => {
              const heroProject = featuredProjects[currentFeaturedIndex]; // Show current featured project
              return (
                <Box style={{
                  position: 'relative',
                  height: '70vh',
                  minHeight: '500px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: heroProject.poster 
                    ? `linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%), url(${heroProject.poster}) center/cover no-repeat`
                    : 'linear-gradient(135deg, #e50914 0%, #f40612 25%, #1e293b 75%, #0f172a 100%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.8s ease-in-out'
                }}>
                  {/* Navigation Arrows - Only show if multiple featured projects */}
                  {featuredProjects.length > 1 && (
                    <>
                      <button
                        onClick={prevFeatured}
                        style={{
                          position: 'absolute',
                          left: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '50px',
                          height: '50px',
                          background: 'rgba(0,0,0,0.2)',
                          border: 'none',
                          borderRadius: '50%',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '20px',
                          cursor: 'pointer',
                          zIndex: 10,
                          backdropFilter: 'blur(5px)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0.7
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(229,9,20,0.6)';
                          e.target.style.transform = 'translateY(-50%) scale(1.1)';
                          e.target.style.color = '#fff';
                          e.target.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(0,0,0,0.2)';
                          e.target.style.transform = 'translateY(-50%) scale(1)';
                          e.target.style.color = 'rgba(255,255,255,0.7)';
                          e.target.style.opacity = '0.7';
                        }}
                      >
                        ‹
                      </button>

                      <button
                        onClick={nextFeatured}
                        style={{
                          position: 'absolute',
                          right: '20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '50px',
                          height: '50px',
                          background: 'rgba(0,0,0,0.2)',
                          border: 'none',
                          borderRadius: '50%',
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '20px',
                          cursor: 'pointer',
                          zIndex: 10,
                          backdropFilter: 'blur(5px)',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0.7
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(229,9,20,0.6)';
                          e.target.style.transform = 'translateY(-50%) scale(1.1)';
                          e.target.style.color = '#fff';
                          e.target.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(0,0,0,0.2)';
                          e.target.style.transform = 'translateY(-50%) scale(1)';
                          e.target.style.color = 'rgba(255,255,255,0.7)';
                          e.target.style.opacity = '0.7';
                        }}
                      >
                        ›
                      </button>
                    </>
                  )}
                  {/* Content Overlay */}
                  <Box style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '40px 48px'
                  }}>
                    <Box style={{ maxWidth: '600px', zIndex: 2 }}>
                      {/* Featured Badge */}
                      <Box style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(229,9,20,0.9)',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}>
                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}>
                          ⭐ FEATURED
                        </span>
                      </Box>

                      {/* Title */}
                      <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        color: '#fff',
                        margin: '0 0 16px 0',
                        letterSpacing: '-0.02em',
                        textShadow: '0 4px 16px rgba(0,0,0,0.8)',
                        lineHeight: 1.1
                      }}>
                        {heroProject.title}
                      </h1>

                      {/* Description */}
                      <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#e2e8f0',
                        lineHeight: 1.6,
                        margin: '0 0 24px 0',
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                        maxWidth: '500px'
                      }}>
                        {heroProject.description || `Experience "${heroProject.title}" - a premium production featuring cutting-edge storytelling and exceptional quality.`}
                      </p>

                      {/* Meta Info */}
                      <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginBottom: '32px',
                        flexWrap: 'wrap'
                      }}>
                        <Box style={{
                          background: 'rgba(0,0,0,0.6)',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                          <span style={{ color: '#f8fafc', fontSize: '14px', fontWeight: 600 }}>
                            {heroProject.status?.replace('-', ' ').toUpperCase() || 'IN PRODUCTION'}
                          </span>
                        </Box>
                        {heroProject.genre && (
                          <span style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
                            {heroProject.genre}
                          </span>
                        )}
                        {heroProject.client && (
                          <span style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
                            Client: {heroProject.client}
                          </span>
                        )}
                      </Box>

                      {/* Action Buttons */}
                      <Box style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center'
                      }}>
                        <button
                          onClick={() => handleProjectClick(heroProject)}
                          style={{
                            background: '#fff',
                            color: '#000',
                            border: 'none',
                            padding: '14px 32px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.background = '#e5e5e5';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.background = '#fff';
                          }}
                        >
                          ▶ View Project
                        </button>
                        
                        <button
                          style={{
                            background: 'rgba(109, 109, 110, 0.7)',
                            color: '#fff',
                            border: '2px solid rgba(255,255,255,0.5)',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(109, 109, 110, 0.9)';
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(109, 109, 110, 0.7)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          ℹ More Info
                        </button>
                      </Box>
                    </Box>
                  </Box>

                  {/* Navigation Indicators for Multiple Featured Projects */}
                  {featuredProjects.length > 1 && (
                    <Box style={{
                      position: 'absolute',
                      bottom: '30px',
                      right: '48px',
                      display: 'flex',
                      gap: '10px',
                      zIndex: 3
                    }}>
                      {featuredProjects.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentFeaturedIndex(index)}
                          style={{
                            width: index === currentFeaturedIndex ? '24px' : '12px',
                            height: '4px',
                            border: 'none',
                            borderRadius: '2px',
                            background: index === currentFeaturedIndex 
                              ? '#e50914' 
                              : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (index !== currentFeaturedIndex) {
                              e.target.style.background = 'rgba(255,255,255,0.8)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (index !== currentFeaturedIndex) {
                              e.target.style.background = 'rgba(255,255,255,0.5)';
                            }
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              );
            })()}
          </Box>
        )}

        {/* All Projects Section */}
        <Box>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700,
            color: '#f8fafc',
            marginBottom: '24px',
            letterSpacing: '-0.025em',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            📋 All Projects
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #e50914, #f40612)',
              borderRadius: '2px'
            }}></span>
          </h2>
          <ProjectGrid
            projects={projects}
            onProjectClick={handleProjectClick}
            selectedProjects={selectedProjects}
            isLoading={false}
          />
        </Box>
      </Box>
    </Box>
  );
}
