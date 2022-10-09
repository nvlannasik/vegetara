const appBarHeight = 86;
const sidebarWidth = 200;
const styles = (theme) => ({
  container: {
    overflowX: 'hidden',
  },
  main: {
    '@media (max-width: 1299px)': {
      width: `calc(100% - ${sidebarWidth}px)`,
    },
    
  },

  appBar:{
    backgroundColor:'#FFFFFF',
    width: '100%',
    height: `${appBarHeight}px`,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    padding: '0 55px 0 50px',
    transition: 'all 0.5s ease',
    '@media (min-width: 768px) and (max-width: 1299px)': {
      backgroundColor: 'transparent',
      width: '100%',
      position: 'absolute',
    },
    '@media (max-width: 767px)': {
      padding: '0 10px 0 10px',
      position: 'relative',
    },
    '& .logo': {
      
      '& h1': {
        color: '#7DCE13',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Baumans, cursive',
        '@media (max-width: 1299px)': {
          color:'white'
        },
        '@media (max-width: 767px)': {
          fontSize: 24,
          color: '#7DCE13',
        },
      },
    },
    '& .menu': {
      '@media (max-width: 1299px)': {
        display: 'none',
      },
      '& .menuItem': {
        '& ul': {
          display: 'flex',
          listStyle: 'none',
          '& li': {
            color: '#757575',
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Inter Tight, sans-serif',
            marginRight: 20,
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
              color: '#7DCE13',
            },
            '& .Link': {
              textDecoration: 'none',
            },
          },
        },
      },
    },
    '& .rightElement': {
      display: 'flex',
      '& .searchBar': {
        '@media (max-width: 1299px)': {
          display: 'none',
        },
      },
      '& .trolli': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        height: 40,
        
        '& svg': {
          color: '#757575',
          cursor: 'pointer',
          height: 40,
          '@media (max-width: 1299px)': {
            color: 'white'
          },
          '@media (max-width: 767px)': {
            color: '#757575',
          },
        },
      },
      '& .menuIcon': {
        display: 'none',
        '@media (max-width: 1299px)': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
          height: 40,
          '& svg': {
            color: '#757575',
            cursor: 'pointer',
            height: 40,
            '@media (max-width: 1299px)': {
              color: 'white'
            },
            '@media (max-width: 767px)': {
              color: '#757575',
            },
          },
        },
        '@media (max-width: 767px)': {
          marginLeft: 5,
        },
      },

    },
  },
  sidebarHide: {
    display:'none',
    '@media (max-width: 1299px)': {
      display: 'block',
      backgroundColor: '#FFFFFF',
      alignItems: 'flex-end',
      width: '0px',
      height: '100%',
      position: 'absolute',
      transition: 'width 0.5s ease out',
    },
  },
  sidebarShow: {
    display: 'none',
    '@media (max-width: 1299px)': {
      display: 'block',
      backgroundColor: '#FFFFFF',
      alignItems: 'flex-end',
      width: `${sidebarWidth}px`,
      height: '100%',
      position: 'absolute',
      right: 0,
      transition: 'width 0.5s ease in',
    },
    '@media (max-width: 767px)': {
      width: `${sidebarWidth - 50}px`,
    },
    '& .sidebar': {
      width: '100%',
      marginLeft: 20,
    },

  }
})

export default styles;