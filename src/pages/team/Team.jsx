

import { Box, Text } from '@mantine/core';
import PageHeader from '../../components/layout/PageHeader';
import TeamWidgetCard from '../../components/team/TeamWidgetCard';



function Team() {
  return (
    <Box px={0} py={0} style={{ width: '100%' }}>
      <PageHeader title="Team" />
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridTemplateRows: 'repeat(5, 120px)',
          gap: 24,
        }}
      >
        <TeamWidgetCard
          title="Team List"
          accent="#ffd700"
          description="Select or view teams here."
          style={{ gridColumn: '1 / span 2', gridRow: '1 / span 1' }}
        >
          <Text size="sm" mt="md" component="div">Demo: 1 row high, 2 columns wide.</Text>
        </TeamWidgetCard>
        <TeamWidgetCard
          title="Members"
          accent="#4f8cff"
          description="View and manage team members."
          style={{ gridColumn: '3 / span 3', gridRow: '1 / span 2' }}
        >
          <Text size="sm" mt="md" component="div">
            Demo: 2 rows high, 3 columns wide.<br />- Member 1<br />- Member 2<br />- Member 3<br />- Member 4
          </Text>
        </TeamWidgetCard>
        <TeamWidgetCard
          title="Calendar"
          accent="#a259ea"
          description="Team calendar and events."
          style={{ gridColumn: '1 / span 3', gridRow: '2 / span 2' }}
        >
          <Text size="sm" mt="md" component="div">
            Demo: 2 rows high, 3 columns wide.<br />- Event 1<br />- Event 2
          </Text>
        </TeamWidgetCard>
        <TeamWidgetCard
          title="Widget"
          accent="#222"
          description="Custom widget area."
          style={{ gridColumn: '4 / span 2', gridRow: '3 / span 3' }}
        >
          <Text size="sm" mt="md" component="div">
            Demo: 3 rows high, 2 columns wide.<br />- Item 1<br />- Item 2<br />- Item 3<br />- Item 4<br />- Item 5<br />- Item 6
          </Text>
        </TeamWidgetCard>
      </Box>
    </Box>
  );
}

export default Team;
