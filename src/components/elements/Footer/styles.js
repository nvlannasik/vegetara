const Style = (theme) => ({
  footer: {
    left: '50%',
    width: '100vw',
    display: 'flex',
    position: 'relative',
    transform: 'translateX(-50%)',
    justifyContent:'center',
    backgroundColor: '#1E2025',
    '@media (max-width: 1299px)': {
      flexDirection: 'column',
    },
  },
});

export default Style;