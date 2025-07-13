import { Box, Group } from '@mantine/core';
import Button from '../common/Button';

export default function BulkActions({
  selectedCount = 0,
  actions = [],
  onCancel,
}) {
  if (selectedCount === 0) return null;

  return (
    <Box
      style={{
        background: '#f8f9fa',
        padding: '1rem',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        marginTop: '1rem',
      }}
    >
      <Group justify="space-between" align="center">
        <Box>
          <strong>{selectedCount}</strong> item{selectedCount !== 1 ? 's' : ''} selected
        </Box>
        
        <Group>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'secondary'}
              size="small"
              onClick={action.onClick}
              disabled={action.disabled}
            >
              {action.label}
            </Button>
          ))}
          
          {onCancel && (
            <Button 
              variant="secondary" 
              size="small"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </Group>
      </Group>
    </Box>
  );
}
