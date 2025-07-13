
import { Box, Title, Group } from '@mantine/core';
import Button from '../common/Button';

export default function PageHeader({
  title,
  actions = [],
  children,
}) {
  return (
    <Box style={{
      marginBottom: '2rem',
      padding: '0 0.5rem',
      background: '#f6f8fa',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(30,32,36,0.04)',
    }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '3.5rem',
          gap: '1.5rem',
        }}
      >
        {/* Title: left, vertically centered */}
        <Title
          order={2}
          style={{
            fontWeight: 800,
            fontSize: '2rem',
            letterSpacing: '0.5px',
            color: '#222',
            margin: 0,
            textAlign: 'left',
            flex: 1,
          }}
        >
          {title}
        </Title>

        {/* Actions: right, vertically centered */}
        <Group style={{ flexShrink: 0, gap: '0.5rem' }}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              size={action.size || 'medium'}
              onClick={action.onClick}
              disabled={action.disabled}
              style={{ minWidth: '90px', fontWeight: 600 }}
            >
              {action.label}
            </Button>
          ))}
        </Group>
      </Box>

      {/* Additional Content Area */}
      {children}
    </Box>
  );
}
