import { Container, Grid } from '@mantine/core';

export default function TeamDashLayout({ children }) {
  // Children should be Grid.Col elements with TeamWidgetCard inside
  // Now supports responsive/asymmetrical columns via Mantine's object span prop
  return (
    <Container my="md" px={0} style={{ maxWidth: '100%' }}>
      <Grid gutter={24}>
        {children}
      </Grid>
    </Container>
  );
}
