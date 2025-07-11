import { Box, Group, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Header() {
  return (
    <Box
      component="header"
      style={{
        background: '#222',
        color: '#fff',
        padding: '0.5rem 2rem',
        fontSize: '1.25rem',
        fontWeight: 500,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        letterSpacing: '0.5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text>PRODUCTION-HUB</Text>
      
<Group gap={8} align="center" style={{ cursor: 'pointer', paddingRight: '2rem' }}>
  <Text size="md" style={{ color: '#fff', fontWeight: 500 }}>Hello, Gage!</Text>
  <IconChevronDown size={16} style={{ color: '#ccc' }} />
</Group>

    </Box>
  );
}

export default Header;
