
import { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  const [selectedTeams, setSelectedTeams] = useState(['all']);
  const [currentView, setCurrentView] = useState('dayGridMonth');
  const [showAddEvent, setShowAddEvent] = useState(false);

  const teams = [
    { id: 'all', name: 'All Teams', color: '#6366f1' },
    { id: 'ics', name: 'ICS Team', color: '#10b981' },
    { id: 'technivision', name: 'TechniVision', color: '#3b82f6' },
    { id: 'production', name: 'Production Team', color: '#8b5cf6' }
  ];

  const allEvents = [
    // ICS Team Events
    {
      id: '1',
      title: 'Script Reading - Virtual Ass-istant',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
      team: 'ics',
      type: 'meeting',
      color: '#10b981',
      extendedProps: {
        description: 'Script reading session for Virtual Ass-istant project',
        location: 'Conference Room A',
        attendees: ['John Doe', 'Jane Smith', 'Mike Johnson']
      }
    },
    {
      id: '2',
      title: 'Shoot Day - Nipplegate',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
      team: 'ics',
      type: 'production',
      color: '#10b981'
    },
    {
      id: '3',
      title: 'Team Standup',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 22, 9, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 22, 10, 0),
      team: 'ics',
      type: 'meeting',
      color: '#10b981'
    },
    // TechniVision Events
    {
      id: '4',
      title: 'Client Review - Tech Demo',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
      team: 'technivision',
      type: 'review',
      color: '#3b82f6'
    },
    {
      id: '5',
      title: 'Equipment Setup',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
      team: 'technivision',
      type: 'technical',
      color: '#3b82f6'
    },
    // Production Team Events
    {
      id: '6',
      title: 'Location Scout',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
      team: 'production',
      type: 'field',
      color: '#8b5cf6'
    },
    {
      id: '7',
      title: 'That\'s A Wrap! - Premiere',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 28),
      team: 'production',
      type: 'event',
      color: '#8b5cf6'
    }
  ];

  const getFilteredEvents = () => {
    if (selectedTeams.includes('all')) {
      return allEvents;
    }
    return allEvents.filter(event => selectedTeams.includes(event.team));
  };

  const handleTeamToggle = (teamId) => {
    if (teamId === 'all') {
      setSelectedTeams(['all']);
    } else {
      const newSelection = selectedTeams.includes('all') 
        ? [teamId]
        : selectedTeams.includes(teamId)
          ? selectedTeams.filter(id => id !== teamId)
          : [...selectedTeams.filter(id => id !== 'all'), teamId];
      
      setSelectedTeams(newSelection.length === 0 ? ['all'] : newSelection);
    }
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      'meeting': '📅',
      'production': '🎬',
      'review': '📋',
      'technical': '🔧',
      'field': '📍',
      'event': '🎉'
    };
    return icons[type] || '📅';
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
        {/* Calendar Header */}
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
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: '#f8fafc',
                margin: '0 0 8px 0',
                letterSpacing: '-0.025em'
              }}>
                Team Calendar
              </h1>
              <p style={{
                color: '#cbd5e1',
                fontSize: '14px',
                margin: 0
              }}>
                Manage events and schedules across all teams
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setShowAddEvent(true)}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}
              >
                + Add Event
              </button>
              <button
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => alert('Share Calendar functionality coming soon!')}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0px)'}
              >
                Share Calendar
              </button>
            </div>
          </div>

          {/* Team Filters */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#cbd5e1',
              marginRight: '8px'
            }}>
              Filter by team:
            </span>
            {teams.map(team => (
              <button
                key={team.id}
                onClick={() => handleTeamToggle(team.id)}
                style={{
                  background: selectedTeams.includes(team.id) || selectedTeams.includes('all') && team.id !== 'all'
                    ? `linear-gradient(135deg, ${team.color}, ${team.color}dd)`
                    : 'rgba(255, 255, 255, 0.1)',
                  color: selectedTeams.includes(team.id) || selectedTeams.includes('all') && team.id !== 'all'
                    ? '#fff'
                    : '#cbd5e1',
                  border: `1px solid ${team.color}40`,
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {team.name}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {[
              { id: 'dayGridMonth', label: 'Month' },
              { id: 'timeGridWeek', label: 'Week' },
              { id: 'timeGridDay', label: 'Day' }
            ].map(view => (
              <button
                key={view.id}
                onClick={() => setCurrentView(view.id)}
                style={{
                  background: currentView === view.id 
                    ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  color: currentView === view.id ? '#fff' : '#cbd5e1',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '24px'
        }}>
          
          {/* Sidebar - Upcoming Events */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
            height: 'fit-content',
            backdropFilter: 'blur(10px)'
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
              <span style={{ fontSize: '20px' }}>📅</span>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#f8fafc',
                margin: 0
              }}>
                Upcoming Events
              </h3>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxHeight: '500px',
              overflowY: 'auto'
            }}>
              {getFilteredEvents().slice(0, 8).map((event) => (
                <div key={event.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  background: `${event.color}10`,
                  borderRadius: '12px',
                  borderLeft: `4px solid ${event.color}`,
                  transition: 'all 0.2s ease'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flex: 1
                  }}>
                    <span style={{ fontSize: '16px' }}>
                      {getEventTypeIcon(event.type)}
                    </span>
                    <div>
                      <div style={{
                        fontWeight: 600,
                        color: '#f8fafc',
                        fontSize: '13px',
                        marginBottom: '2px'
                      }}>
                        {event.title}
                      </div>
                      <div style={{
                        color: '#cbd5e1',
                        fontSize: '11px'
                      }}>
                        {event.start.toLocaleDateString()} • {teams.find(t => t.id === event.team)?.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Calendar */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
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
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: '20px 20px 0 0'
            }} />
            
            <div style={{
              '--fc-border-color': '#e2e8f0',
              '--fc-button-bg-color': '#f8fafc',
              '--fc-button-border-color': '#e2e8f0',
              '--fc-button-text-color': '#475569',
              '--fc-button-active-bg-color': '#6366f1',
              '--fc-button-active-border-color': '#6366f1',
              '--fc-today-bg-color': 'rgba(99, 102, 241, 0.1)'
            }}>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={currentView}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: ''
                }}
                height="600px"
                events={getFilteredEvents()}
                eventDisplay="block"
                dayMaxEvents={3}
                moreLinkClick="popover"
                eventClick={(info) => {
                  alert(`Event: ${info.event.title}\nTeam: ${teams.find(t => t.id === info.event.extendedProps.team)?.name || 'Unknown'}`);
                }}
                dateClick={(info) => {
                  console.log('Date clicked:', info.dateStr);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

