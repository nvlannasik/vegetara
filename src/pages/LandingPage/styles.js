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
      '& button': {
        width: 200,
      },
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
  cardProduct: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    '& ul': {
      width: '100%',
      padding: 0,
      listStyle: 'none',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      '@media (min-width: 768px) and (max-width: 1299px)': {
        gridTemplateColumns: 'auto auto auto auto',
      },
      '@media (max-width: 767px)': {
        gridTemplateColumns: 'auto auto auto auto',
      },
      '@media (max-width: 700px)': {
        gridTemplateColumns: 'auto auto auto',
      },
      '@media (max-width: 500px)': {
        gridTemplateColumns: 'auto auto',
      }
      
    }
  },
  
  titleProduct : {
    textAlign: 'center',
  }

})

export default styles;