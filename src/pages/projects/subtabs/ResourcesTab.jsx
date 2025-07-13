import { Paper, Title, Text } from '@mantine/core';

export default function ResourcesTab({ project }) {
  return (
    <Paper shadow="xs" radius="md" p="lg" mb="xl" withBorder>
      <Title order={4} mb="md">Resources</Title>
      <Text size="sm" color="dimmed" mb="sm">
        Images, raw footage, project files, scripts, etc.
      </Text>
      {/* Add resource cards, file lists, upload buttons, etc. here */}
    </Paper>
  );
}
