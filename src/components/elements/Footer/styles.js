const Style = (theme) => ({
  footer: {
    left: '50%',
    width: '100vw',
    display: 'flex',
    position: 'relative',
    transform: 'translateX(-50%)',
    justifyContent: 'center',
    backgroundColor: '#7DCE13',
    paddingTop: '50px',
    paddingBottom: '50px',
    '@media (min-width: 768px) and (max-width:1299)': {
      paddingTop: '70px',
      paddingBottom: '70px',
    },
    '@media (max-width: 767px)': {
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    ' & ul': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1200px',
      padding: '0 20px',
      '@media (max-width: 768px)': {
        display: 'block',
      },
      ' & li': {
        display: 'block',
        '@media (max-width: 1299px)': {
          justifyContent: 'center',
        },
        '& .logo': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '& .address': {
          display: 'inline-block',
          textAlign: 'center',
          margin: '10px 0',
          '@media (max-width: 767px)': {
            display: 'none',
          },
        },
        
      },
    },
  },
  CopyRight:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    '& p': {
      color: 'white',
      fontWeight: 'bold',
    },
},
});

export default Style;