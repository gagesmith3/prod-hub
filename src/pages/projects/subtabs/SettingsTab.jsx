import { Paper, Title } from '@mantine/core';

export default function SettingsTab({ project }) {
  return (
    <Paper shadow="xs" radius="md" p="lg" mb="xl" withBorder>
      <Title order={4} mb="md">Project Settings</Title>
      {/* Add settings form, team management, permissions, etc. here */}
    </Paper>
  );
}
