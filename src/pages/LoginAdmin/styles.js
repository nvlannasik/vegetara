const styles = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    '@media (max-width: 767px)': {
      display: 'block',
      height: 'auto',
    },
    '& .logo': {
      width: '100%',
      backgroundColor: '#7DCE13',
      height: '100vh',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      '& .img2': {
        display: 'none',
      },
      '@media (min-width: 768px) and (max-width: 1299px)': {
        width: '100%',
      },
      '@media (max-width: 767px)': {
        height: 'auto',
        width: '100%',
        backgroundColor: '#fff',
        '& .img1': {
          display: 'none',
        },
        '& .img2': {
          display: 'block',
        },
      },
    },
    '& .login': {
      width: '100%',
      height: 'auto',
      padding: '0 48px',
      '& .forgotPassWrapper': {
        margin: '10px 0',
      },
      '@media (max-width: 767px)': {
        padding: '0px 48px',
        width: 'auto',
      },
      '& h1': {
        fontSize: '36px',
        fontWeight: 'bold',
        fontFamily: 'Inter, sans-serif',
        '@media (min-width: 768px) and (max-width: 1299px)': {
          fontSize: '24px',
        },
        '@media (max-width: 767px)': {
          fontSize: '24px',
        },
      }
    },
  },
});

export default styles;