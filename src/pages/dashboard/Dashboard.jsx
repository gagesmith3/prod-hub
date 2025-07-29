import { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import HeroHeader from '../../components/common/HeroHeader';

export default function Dashboard() {
  const [selectedTeam, setSelectedTeam] = useState('ICS Team');

  const teams = [
    { name: 'ICS Team', members: 8, projects: 12, color: '#10b981' },
    { name: 'TechniVision', members: 6, projects: 8, color: '#3b82f6' },
    { name: 'Production Team', members: 4, projects: 5, color: '#8b5cf6' }
  ];

  const featuredProjects = [
    {
      title: 'Virtual Ass-istant',
      status: 'In Production',
      progress: 75,
      image: 'https://via.placeholder.com/400x225/10b981/ffffff?text=Virtual+Ass-istant',
      team: 'ICS Team',
      dueDate: '3 days',
      priority: 'high'
    },
    {
      title: 'Nipplegate',
      status: 'Post Production',
      progress: 90,
      image: 'https://via.placeholder.com/400x225/ef4444/ffffff?text=Nipplegate',
      team: 'ICS Team',
      dueDate: '1 week',
      priority: 'high'
    },
    {
      title: 'That\'s A Wrap!',
      status: 'Pre Production',
      progress: 45,
      image: 'https://via.placeholder.com/400x225/8b5cf6/ffffff?text=That\'s+A+Wrap!',
      team: 'Production Team',
      dueDate: '2 weeks',
      priority: 'medium'
    }
  ];

  const quickStats = [
    { label: 'Active Projects', value: '12', change: '+2', color: '#10b981', icon: '🎬' },
    { label: 'Team Members', value: '18', change: '+1', color: '#3b82f6', icon: '👥' },
    { label: 'This Week\'s Tasks', value: '24', change: '-3', color: '#f59e0b', icon: '✅' },
    { label: 'Client Reviews', value: '6', change: '+4', color: '#8b5cf6', icon: '📋' }
  ];

  const upcomingEvents = [
    { title: 'Team Standup', time: '09:00 AM', date: 'Today', team: 'ICS Team', type: 'meeting', color: '#10b981' },
    { title: 'Client Review - Nipplegate', time: '02:00 PM', date: 'Today', team: 'ICS Team', type: 'review', color: '#ef4444' },
    { title: 'Equipment Check', time: '04:30 PM', date: 'Today', team: 'TechniVision', type: 'technical', color: '#3b82f6' },
    { title: 'Location Scout', time: '10:00 AM', date: 'Tomorrow', team: 'Production Team', type: 'field', color: '#8b5cf6' },
    { title: 'Script Reading', time: '01:00 PM', date: 'Tomorrow', team: 'ICS Team', type: 'meeting', color: '#10b981' }
  ];

  const actionItems = [
    { task: 'Finalize edit for Virtual Ass-istant', assignee: 'Mike Killen', due: '2 days', priority: 'high', status: 'in-progress', team: 'ICS Team' },
    { task: 'Complete color grading for Nipplegate', assignee: 'Gage Smith', due: '1 day', priority: 'high', status: 'in-progress', team: 'ICS Team' },
    { task: 'Book studio for That\'s A Wrap! shoot', assignee: 'Gage Smith', due: '3 days', priority: 'medium', status: 'pending', team: 'Production Team' },
    { task: 'Update project timeline documentation', assignee: 'Sierra Johnson', due: '5 days', priority: 'low', status: 'pending', team: 'TechniVision' },
    { task: 'Prepare equipment list for next shoot', assignee: 'Cole Mylan', due: '4 days', priority: 'medium', status: 'in-progress', team: 'TechniVision' }
  ];

  const recentActivity = [
    { action: 'Project "Nipplegate" moved to Post Production', user: 'Amy Charlesworth', time: '2 hours ago', type: 'project' },
    { action: 'New team member added to ICS Team', user: 'Caden Miller', time: '4 hours ago', type: 'team' },
    { action: 'Senior feedback received for Virtual Ass-istant', user: 'System', time: '6 hours ago', type: 'review' },
    { action: 'Equipment maintenance completed', user: 'Ron Brown', time: '1 day ago', type: 'technical' }
  ];

  const getPriorityColor = (priority) => {
    const colors = { 'high': '#ef4444', 'medium': '#f59e0b', 'low': '#10b981' };
    return colors[priority] || '#64748b';
  };

  const getStatusColor = (status) => {
    const colors = { 'completed': '#10b981', 'in-progress': '#3b82f6', 'pending': '#64748b' };
    return colors[status] || '#64748b';
  };

  const getActivityIcon = (type) => {
    const icons = { 'project': '🎬', 'team': '👥', 'review': '📋', 'technical': '🔧' };
    return icons[type] || '📝';
  };

  return (
    <div style={{ 
      width: '100%',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      padding: '0'
    }}>
      
      <div style={{
        padding: '24px',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        {/* Hero Section */}
        <HeroHeader 
          title="Welcome Back Gage!"
          subtitle="You have 12 active projects and 24 tasks due this week"
          buttons={[
            {
              label: 'View All Projects',
              primary: true,
              onClick: () => console.log('View All Projects clicked')
            },
            {
              label: 'Team Calendar',
              primary: false,
              onClick: () => console.log('Team Calendar clicked')
            }
          ]}
        />

        {/* Quick Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {quickStats.map((stat, index) => (
            <div key={index} style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${stat.color}, ${stat.color}aa)`,
                borderRadius: '20px 20px 0 0'
              }} />
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '28px' }}>{stat.icon}</span>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: stat.change.startsWith('+') ? '#10b981' : '#ef4444',
                  background: stat.change.startsWith('+') ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  padding: '4px 8px',
                  borderRadius: '12px'
                }}>
                  {stat.change}
                </div>
              </div>
              <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 900 }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '32px',
          marginBottom: '32px'
        }}>
          
          {/* Featured Projects Carousel */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '24px',
            padding: '32px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px' }}>🎬</span>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                Featured Projects
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {featuredProjects.map((project, index) => (
                <div key={index} style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), url("${project.image}") center/cover`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                    padding: '24px',
                    color: '#fff'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: getPriorityColor(project.priority),
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      {project.priority}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      margin: '0 0 8px 0'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      fontSize: '14px',
                      opacity: 0.8,
                      marginBottom: '12px'
                    }}>
                      {project.status} • Due in {project.dueDate}
                    </div>
                    
                    {/* Progress Bar */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      height: '6px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: '#10b981',
                        height: '100%',
                        width: `${project.progress}%`,
                        borderRadius: '8px',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                    <div style={{
                      fontSize: '12px',
                      marginTop: '4px',
                      opacity: 0.7
                    }}>
                      {project.progress}% Complete
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '24px',
            padding: '32px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px' }}>📅</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                Today's Schedule
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              {upcomingEvents.map((event, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  background: `${event.color}20`,
                  borderRadius: '16px',
                  borderLeft: `4px solid ${event.color}`,
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: event.color,
                    marginRight: '16px'
                  }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 600,
                      color: '#fff',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      {event.title}
                    </div>
                    <div style={{
                      color: '#94a3b8',
                      fontSize: '12px'
                    }}>
                      {event.time} • {event.date} • {event.team}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Items & Recent Activity */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px'
        }}>
          
          {/* Action Items */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '24px',
            padding: '32px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #f59e0b, #d97706)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px' }}>✅</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                Priority Tasks
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {actionItems.slice(0, 4).map((item, index) => (
                <div key={index} style={{
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  borderLeft: `4px solid ${getStatusColor(item.status)}`,
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    fontWeight: 600,
                    color: '#fff',
                    fontSize: '14px',
                    marginBottom: '8px'
                  }}>
                    {item.task}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <span style={{ color: '#94a3b8', fontSize: '12px' }}>
                      Assigned to: <strong>{item.assignee}</strong>
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: getStatusColor(item.status),
                      background: `${getStatusColor(item.status)}30`,
                      padding: '4px 8px',
                      borderRadius: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {item.status.replace('-', ' ')}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: getPriorityColor(item.priority),
                      background: `${getPriorityColor(item.priority)}30`,
                      padding: '4px 8px',
                      borderRadius: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {item.priority}
                    </div>
                    <div style={{
                      color: '#64748b',
                      fontSize: '11px',
                      marginLeft: 'auto'
                    }}>
                      Due in {item.due}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            borderRadius: '24px',
            padding: '32px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ fontSize: '28px' }}>📊</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                Recent Activity
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    marginRight: '16px'
                  }}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 600,
                      color: '#fff',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      {activity.action}
                    </div>
                    <div style={{
                      color: '#94a3b8',
                      fontSize: '12px'
                    }}>
                      {activity.user} • {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
