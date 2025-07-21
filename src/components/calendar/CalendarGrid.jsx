import { Box, Grid, Text } from '@mantine/core';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getMonthMatrix(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matrix = [];
  let day = 1 - firstDay;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    }
    matrix.push(week);
  }
  return matrix;
}

export default function CalendarGrid({ year, month }) {
  const matrix = getMonthMatrix(year, month);
  return (
    <Box style={{ width: '100%', maxWidth: 520, margin: '0 auto' }}>
      <Grid gutter={0} columns={7} style={{ marginBottom: 8 }}>
        {daysOfWeek.map((d) => (
          <Grid.Col span={1} key={d}>
            <Text align="center" weight={700} size="md" style={{ color: '#222' }}>{d}</Text>
          </Grid.Col>
        ))}
      </Grid>
      {matrix.map((week, i) => (
        <Grid gutter={0} columns={7} key={i}>
          {week.map((day, j) => (
            <Grid.Col span={1} key={j}>
              <Box style={{
                height: 48,
                border: '1px solid #eee',
                background: day ? '#fffbe6' : '#f8f8f8',
                color: day ? '#222' : '#ccc',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 500,
                fontSize: '1.1rem',
              }}>
                {day || ''}
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
