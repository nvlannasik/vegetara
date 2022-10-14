const styles = () => ({
  landingPage: {
    width: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex:-1,
    },
    '& .landingPageContent': {
      position: 'relative',
      top: -100,
      textAlign: 'center',
      '@media (max-width: 1299px)': {
        top: -80,
      },
      '@media (max-width: 767px)': {
        top: -60,
      },
      '& h1': {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        
        '@media (max-width: 1299px)': {
          fontSize: 24,
        },
        '@media (max-width: 767px)': {
          fontSize: 18,
        },
      },
    }
  },
})

export default styles;