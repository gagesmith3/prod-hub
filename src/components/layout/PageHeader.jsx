
import { Box, Title, Group } from '@mantine/core';
import Button from '../common/Button';

export default function PageHeader({
  title,
  actions = [],
  children,
}) {
  return (
    <Box style={{
      marginBottom: '2.5rem',
      padding: '1.5rem 2rem',
      background: 'linear-gradient(90deg, #fdfb86ff 10%, #fff 100%)', // Higher contrast, warm pale gold
      border: 'none',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(30,32,36,0.10)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '4rem',
          gap: '2.5rem',
        }}
      >
        {/* Title: left, vertically centered */}
        <Title
          order={2}
          style={{
            fontWeight: 900,
            fontSize: '2.25rem',
            letterSpacing: '0.7px',
            color: '#222',
            margin: 0,
            textAlign: 'left',
            flex: 1,
            lineHeight: 1.1,
          }}
        >
          {title}
        </Title>

        {/* Actions: right, vertically centered */}
        <Group style={{ flexShrink: 0, gap: '1.5rem', display: 'flex' }}>
          {actions
            .filter(action => action.label !== 'Bulk Edit')
            .map((action, index, arr) => (
              <Button
                key={index}
                variant={action.variant || 'primary'}
                size={action.size || 'large'}
                onClick={action.onClick}
                disabled={action.disabled}
                style={{
                  minWidth: '110px',
                  fontWeight: 700,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  fontSize: '1rem',
                  padding: '14px 28px',
                  letterSpacing: '0.5px',
                  marginRight: index !== arr.length - 1 ? '1.5rem' : 0,
                }}
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
