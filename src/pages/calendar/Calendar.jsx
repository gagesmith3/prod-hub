
import { Box } from '@mantine/core';
import PageHeader from '../../components/layout/PageHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
  return (
    <Box px={0} py={0} style={{ width: '100%' }}>
      <PageHeader title="Calendar" />
      <Box style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', maxWidth: 700, margin: '0 auto 1rem auto' }}>
        <button
          style={{
            background: '#ffd700',
            color: '#222',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 1.5rem',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            letterSpacing: '0.5px',
            transition: 'background 0.2s',
          }}
          onClick={() => alert('Add Event functionality coming soon!')}
        >
          + Add Event
        </button>
        <button
          style={{
            background: '#4f8cff',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 1.5rem',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            letterSpacing: '0.5px',
            transition: 'background 0.2s',
          }}
          onClick={() => alert('Share Calendar functionality coming soon!')}
        >
          Share Calendar
        </button>
      </Box>
      <Box style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '1.5rem', maxWidth: 700, margin: '2rem auto' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={[
            {
              title: 'Script Reading',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 5),
              color: '#ffd700',
            },
            {
              title: 'Shoot Date',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
              color: '#ff6f61',
            },
            {
              title: 'Editing Due',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
              color: '#4f8cff',
            },
            {
              title: 'Table Read',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
              color: '#6dd47e',
            },
            {
              title: 'Premiere Night',
              start: new Date(new Date().getFullYear(), new Date().getMonth(), 28),
              color: '#a259ea',
            },
          ]}
        />
      </Box>
    </Box>
  );
}

