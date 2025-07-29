// Modern dark theme matching Netflix/Hulu aesthetic
export const theme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  colors: {
    brand: [
      '#ecfdf5', // emerald-50
      '#d1fae5', // emerald-100
      '#a7f3d0', // emerald-200
      '#6ee7b7', // emerald-300
      '#34d399', // emerald-400
      '#10b981', // emerald-500
      '#059669', // emerald-600
      '#047857', // emerald-700
      '#065f46', // emerald-800
      '#064e3b'  // emerald-900
    ],
    dark: [
      '#f8fafc', // slate-50
      '#f1f5f9', // slate-100
      '#e2e8f0', // slate-200
      '#cbd5e1', // slate-300
      '#94a3b8', // slate-400
      '#64748b', // slate-500
      '#475569', // slate-600
      '#334155', // slate-700
      '#1e293b', // slate-800
      '#0f172a'  // slate-900
    ],
    primary: [
      '#dbeafe', // blue-100
      '#bfdbfe', // blue-200
      '#93c5fd', // blue-300
      '#60a5fa', // blue-400
      '#3b82f6', // blue-500
      '#2563eb', // blue-600
      '#1d4ed8', // blue-700
      '#1e40af', // blue-800
      '#1e3a8a', // blue-900
      '#1e3a8a'  // blue-950 (duplicate for 10th shade)
    ]
  },
  colorScheme: 'dark',
  primaryColor: 'brand',
  components: {
    NavLink: {
      styles: (theme, params) => ({
        root: {
          borderRadius: '12px',
          padding: '12px 16px',
          margin: '4px 0',
          transition: 'all 0.2s ease',
          background: params.active ? 'linear-gradient(135deg, #10b981, #059669)' : 'transparent',
          color: params.active ? '#ffffff' : '#94a3b8',
          fontWeight: params.active ? '600' : '500',
          fontSize: '14px',
          '&:hover': {
            background: params.active ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            transform: 'translateX(4px)'
          }
        },
        label: {
          color: 'inherit',
        },
      }),
    },
    Button: {
      styles: (theme) => ({
        root: {
          borderRadius: '12px',
          fontWeight: 600,
          transition: 'all 0.2s ease',
          border: 'none',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
          }
        }
      }),
    },
  },
};
