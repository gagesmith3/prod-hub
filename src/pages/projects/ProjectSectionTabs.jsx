import { Group, Button, Box } from '@mantine/core';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

const tabConfig = [
  {
    group: 'overview',
    tabs: [
      { key: 'Overview', emoji: '📋' },
      { key: 'Resources', emoji: '📁' },
    ],
  },
  {
    group: 'production',
    tabs: [
      { key: 'Pre-Production', emoji: '📝' },
      { key: 'Production', emoji: '🎬' },
      { key: 'Post-Production', emoji: '✂️' },
      { key: 'Distribution', emoji: '🚚' },
    ],
  },
  {
    group: 'settings',
    tabs: [
      { key: 'Settings', emoji: '⚙️' },
    ],
  },
];

export default function ProjectSectionTabs({ sections, activeSection, onSectionChange }) {
  // Only show tabs that exist in the provided sections
  const filteredConfig = tabConfig.map(group => ({
    ...group,
    tabs: group.tabs.filter(tab => sections.includes(tab.key)),
  })).filter(group => group.tabs.length > 0);

  // Animation state for glass effect
  const [animating, setAnimating] = useState(false);
  const prevActiveRef = useRef(activeSection);

  useEffect(() => {
    if (prevActiveRef.current !== activeSection) {
      setAnimating(true);
      const timeout = setTimeout(() => setAnimating(false), 350);
      prevActiveRef.current = activeSection;
      return () => clearTimeout(timeout);
    }
  }, [activeSection]);

  return (
    <Box
      component="nav"
      style={{
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        width: '100%',
        background: 'rgba(247, 248, 250, 0.85)',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(30,32,36,0.10)',
        padding: '0.7rem 1.2rem',
        gap: '0.5rem',
        backdropFilter: 'blur(8px)',
        border: '1px solid #eaeaea',
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
      }}
    >
      {filteredConfig.map((group, i) => (
        <Box key={group.group} style={{ display: 'flex', gap: '0.5rem', flex: group.group === 'production' ? 2 : 1, justifyContent: group.group === 'overview' ? 'flex-start' : group.group === 'settings' ? 'flex-end' : 'center', alignItems: 'center', position: 'relative' }}>
          {group.tabs.map(tab => {
            // Determine if tab is between previous and current active tab for animation
            const tabIndex = filteredConfig.flatMap(g => g.tabs).findIndex(t => t.key === tab.key);
            const prevIndex = filteredConfig.flatMap(g => g.tabs).findIndex(t => t.key === prevActiveRef.current);
            const currIndex = filteredConfig.flatMap(g => g.tabs).findIndex(t => t.key === activeSection);
            const isBetween = animating && ((tabIndex > Math.min(prevIndex, currIndex) && tabIndex < Math.max(prevIndex, currIndex)));
            return (
              <Button
                key={tab.key}
                variant={activeSection === tab.key ? 'filled' : 'subtle'}
                color={group.group === 'production' ? 'blue' : 'gray'}
                size="md"
                style={{
                  fontWeight: 700,
                  borderRadius: '999px',
                  background: activeSection === tab.key
                    ? (group.group === 'production' ? 'linear-gradient(90deg,#2966acff 60%,#3b82f6 100%)' : 'rgba(234,234,234,0.95)')
                    : isBetween
                      ? 'rgba(180, 220, 255, 0.35)' // Glass highlight for in-between tabs
                      : 'rgba(255,255,255,0.7)',
                  color: activeSection === tab.key && group.group === 'production' ? '#fff' : '#222',
                  fontSize: '1.08rem',
                  padding: '0.6rem 1.5rem',
                  boxShadow: activeSection === tab.key ? '0 2px 12px rgba(30,32,36,0.12)' : isBetween ? '0 2px 8px rgba(30,32,36,0.08)' : '0 1px 4px rgba(30,32,36,0.04)',
                  border: activeSection === tab.key ? '2px solid #3b82f6' : '1px solid #eaeaea',
                  transition: 'background 0.35s cubic-bezier(.4,1.2,.4,1), box-shadow 0.35s cubic-bezier(.4,1.2,.4,1), transform 0.18s cubic-bezier(.4,1.2,.4,1)',
                  outline: activeSection === tab.key ? '2px solid #3b82f6' : 'none',
                  transform: activeSection === tab.key ? 'scale(1.08)' : isBetween ? 'scale(1.04)' : 'scale(1)',
                  cursor: 'pointer',
                  minWidth: '120px',
                  minHeight: '44px',
                  letterSpacing: '0.01em',
                  userSelect: 'none',
                  position: 'relative',
                }}
                onClick={() => onSectionChange(tab.key)}
                tabIndex={0}
                aria-label={tab.key}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSectionChange(tab.key);
                  }
                }}
              >
                <span style={{ marginRight: '0.6em', fontSize: '1.2em', verticalAlign: 'middle' }}>{tab.emoji}</span>
                <span style={{ verticalAlign: 'middle' }}>{tab.key}</span>
              </Button>
            );
          })}
          {/* Divider between groups except last */}
          {i < filteredConfig.length - 1 && (
            <Box style={{ width: '2px', height: '32px', background: 'rgba(180,190,210,0.18)', borderRadius: '2px', margin: '0 0.7rem' }} />
          )}
        </Box>
      ))}
    </Box>
  );
}