import { Card, Title, Text, Group, Avatar } from '@mantine/core';

export default function TeamWidgetCard({
  title,
  icon,
  accent = '#ffd700',
  description,
  children,
  span = 1,
  avatar,
  ...props
}) {
  return (
    <Card
      shadow="lg"
      radius={20}
      p="xl"
      withBorder
      style={{
        borderLeft: `6px solid ${accent}`,
        background: 'linear-gradient(120deg, #fffbe6 0%, #fff 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        maxHeight: 180,
        minHeight: 120,
      }}
      {...props}
    >
      <Group position="apart" style={{ marginBottom: 12 }}>
        <Group spacing={10}>
          {icon}
          <Title order={4} style={{ margin: 0 }}>{title}</Title>
        </Group>
        {avatar && <Avatar src={avatar} radius="xl" />}
      </Group>
      {description && <Text color="dimmed">{description}</Text>}
      {children}
    </Card>
  );
}
