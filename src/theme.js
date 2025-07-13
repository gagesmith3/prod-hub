// Mantine shared theme
export const theme = {
  fontFamily: 'Segoe UI, Arial, sans-serif',
  colors: {
    brand: ['#ffd700', '#fff'],
  },
  components: {
    NavLink: {
      styles: (theme, params) => ({
        root: {
          color: params.active ? '#ffd700' : '#fff',
          fontWeight: params.active ? 'bold' : 'normal',
          background: 'transparent',
        },
        label: {
          color: params.active ? '#ffd700' : '#fff',
        },
      }),
    },
  },
};
