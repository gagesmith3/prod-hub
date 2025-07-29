

import { useState } from 'react';
import { Text } from '@mantine/core';
import PageHeader from '../../components/layout/PageHeader';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState('ICS Team');
  
  const teams = [
    { name: 'ICS Team', members: 8, projects: 12 },
    { name: 'TechniVision', members: 6, projects: 8 },
    { name: 'Production Team', members: 4, projects: 5 }
  ];

  const teamMembers = [
    { name: 'John Doe', username: '@johndoe', role: 'Creative Director', email: 'john@ics.com', phone: '+1 555-0123', status: 'online' },
    { name: 'Jane Smith', username: '@janesmith', role: 'Producer', email: 'jane@ics.com', phone: '+1 555-0124', status: 'online' },
    { name: 'Mike Johnson', username: '@mikej', role: 'Editor', email: 'mike@ics.com', phone: '+1 555-0125', status: 'away' },
    { name: 'Sarah Wilson', username: '@sarahw', role: 'Camera Operator', email: 'sarah@ics.com', phone: '+1 555-0126', status: 'offline' },
    { name: 'Alex Chen', username: '@alexc', role: 'Sound Engineer', email: 'alex@ics.com', phone: '+1 555-0127', status: 'online' },
    { name: 'Emma Davis', username: '@emmad', role: 'Motion Graphics', email: 'emma@ics.com', phone: '+1 555-0128', status: 'online' }
  ];

  const calendarEvents = [
    { title: 'Team Standup', time: '09:00 AM', date: 'Today', type: 'meeting', priority: 'high' },
    { title: 'Client Review - Nipplegate', time: '02:00 PM', date: 'Today', type: 'review', priority: 'high' },
    { title: 'Equipment Check', time: '04:30 PM', date: 'Today', type: 'task', priority: 'medium' },
    { title: 'Pre-production Meeting', time: '10:00 AM', date: 'Tomorrow', type: 'meeting', priority: 'medium' },
    { title: 'Location Scout', time: '01:00 PM', date: 'Tomorrow', type: 'field', priority: 'low' }
  ];

  const actionItems = [
    { task: 'Finalize script for Virtual Ass-istant', assignee: 'John Doe', due: '2 days', priority: 'high', status: 'in-progress' },
    { task: 'Complete color grading for Nipplegate', assignee: 'Mike Johnson', due: '1 day', priority: 'high', status: 'in-progress' },
    { task: 'Book studio for That\'s A Wrap! shoot', assignee: 'Jane Smith', due: '3 days', priority: 'medium', status: 'pending' },
    { task: 'Update project timeline documentation', assignee: 'Sarah Wilson', due: '5 days', priority: 'low', status: 'pending' },
    { task: 'Review client feedback and revisions', assignee: 'John Doe', due: '1 day', priority: 'high', status: 'completed' },
    { task: 'Prepare equipment list for next shoot', assignee: 'Alex Chen', due: '4 days', priority: 'medium', status: 'in-progress' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'online': '#10b981',
      'away': '#f59e0b', 
      'offline': '#64748b'
    };
    return colors[status] || '#64748b';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': '#ef4444',
      'medium': '#f59e0b',
      'low': '#10b981'
    };
    return colors[priority] || '#64748b';
  };

  const getTaskStatusColor = (status) => {
    const colors = {
      'completed': '#10b981',
      'in-progress': '#3b82f6',
      'pending': '#64748b'
    };
    return colors[status] || '#64748b';
  };

  return (
    <div style={{ 
      width: '100%',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      padding: '0'
    }}>
      
      <div style={{
        padding: '32px',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        {/* Team Header Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '24px',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Top gradient accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
            borderRadius: '20px 20px 0 0'
          }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <h1 style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#f8fafc',
                  margin: 0,
                  letterSpacing: '-0.025em'
                }}>
                  {selectedTeam}
                </h1>
                
                {/* Team Dropdown */}
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                      outline: 'none'
                    }}
                  >
                    {teams.map(team => (
                      <option key={team.name} value={team.name} style={{ background: '#fff', color: '#1a202c' }}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', color: '#cbd5e1', fontSize: '14px' }}>
                <span><strong>8</strong> Members</span>
                <span><strong>12</strong> Active Projects</span>
                <span><strong>94%</strong> Team Efficiency</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '12px 16px',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#10b981'
              }}></div>
              <span style={{ color: '#059669', fontWeight: 600, fontSize: '14px' }}>
                Team Active
              </span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '24px'
        }}>
          
          {/* Team Members Section */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top gradient accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '20px 20px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '20px' }}>�</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a202c',
                margin: 0
              }}>
                Team Members
              </h2>
            </div>
            
            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${getStatusColor(member.status)}, ${getStatusColor(member.status)}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 600,
                    marginRight: '12px',
                    position: 'relative'
                  }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-2px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: getStatusColor(member.status),
                      border: '2px solid #fff'
                    }}></div>
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontWeight: 600, color: '#1a202c', fontSize: '14px' }}>
                        {member.name}
                      </span>
                      <span style={{ color: '#64748b', fontSize: '12px' }}>
                        {member.username}
                      </span>
                    </div>
                    <div style={{ color: '#4a5568', fontSize: '12px', marginBottom: '4px' }}>
                      {member.role}
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#64748b' }}>
                      <span>{member.email}</span>
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Calendar Section */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top gradient accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: '20px 20px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '20px' }}>📅</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a202c',
                margin: 0
              }}>
                Team Calendar
              </h2>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {calendarEvents.map((event, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: 'rgba(139, 92, 246, 0.05)',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${getPriorityColor(event.priority)}`
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: getPriorityColor(event.priority)
                    }}></div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1a202c', fontSize: '14px', marginBottom: '2px' }}>
                        {event.title}
                      </div>
                      <div style={{ color: '#64748b', fontSize: '11px' }}>
                        {event.date} • {event.type}
                      </div>
                    </div>
                  </div>
                  <div style={{ color: '#4a5568', fontSize: '12px', fontWeight: 600 }}>
                    {event.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Items Section */}
          <div style={{
            gridColumn: '1 / -1',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(30,32,36,0.12), 0 1px 4px rgba(30,32,36,0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top gradient accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '20px 20px 0 0'
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '20px' }}>✅</span>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a202c',
                margin: 0
              }}>
                Action Items & Deliverables
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {actionItems.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px',
                  background: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${getTaskStatusColor(item.status)}`
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: '#1a202c', fontSize: '14px', marginBottom: '4px' }}>
                      {item.task}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                      <span style={{ color: '#4a5568', fontSize: '12px' }}>
                        Assigned to: <strong>{item.assignee}</strong>
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: getTaskStatusColor(item.status),
                        background: `${getTaskStatusColor(item.status)}20`,
                        padding: '2px 6px',
                        borderRadius: '12px',
                        textTransform: 'capitalize'
                      }}>
                        {item.status.replace('-', ' ')}
                      </div>
                      <div style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: getPriorityColor(item.priority),
                        background: `${getPriorityColor(item.priority)}20`,
                        padding: '2px 6px',
                        borderRadius: '12px',
                        textTransform: 'capitalize'
                      }}>
                        {item.priority} priority
                      </div>
                    </div>
                  </div>
                  <div style={{
                    color: '#64748b',
                    fontSize: '12px',
                    fontWeight: 600,
                    textAlign: 'right'
                  }}>
                    Due in<br/>{item.due}
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


export default Team;
