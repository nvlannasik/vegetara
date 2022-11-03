const appBarHeight = 75;
const sidebarWidth = 200;
const styles = (theme) => ({
  '@global': {
    '.MuiPaper-root': {
      width:'300px',
    },
  },
  container: {
    overflowX: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    '& .username': {
      marginTop: '10px',
      fontSize: '14px',
    }
  }
  ,
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
      width: '100%',
      position: 'relative',
    },
    '@media (max-width: 767px)': {
      padding: '0 40px 0 40px',
      position: 'relative',
    },
    '& .logo': {
      
      '& h1': {
        color: '#7DCE13',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Baumans, cursive',
        '@media (max-width: 767px)': {
          fontSize: 24,
          color: '#7DCE13',
        },
      },
    },
    '& .menu': {
      '@media (max-width: 767px)': {
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
            '& a': {
              textDecoration: 'none',
              color: '#757575',
            },
          },
        },
      },
    },
    '& .rightElement': {
      '& .trolli': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        height: 40,
        '@media (max-width: 767px)': {
          marginRight: 0,
        },
        '& svg': {
          color: '#757575',
          cursor: 'pointer',
          height: 40,
          '@media (max-width: 1299px)': {
            color: '#757575',
          },
          '@media (max-width: 767px)': {
            color: '#757575',
          },
        },
      },
      '& .avatar': {
        display: 'flex',
        alignItems: 'center',
        
        '& .menuIcon': {
          display: 'none',
          '@media (max-width: 1299px)': {
            display: 'flex',
          },
        },
        '& .username': {
          alignItems: 'center',
          display: 'flex',  
          '& h2': {
            margin: 0
          },
          '@media (max-width: 1299px)': {
            display: 'none',
          },
        },
        '& .logout': {
          marginLeft: 20,
          '& svg': {
            color: '#757575',
            cursor: 'pointer',
            height: 40,
            border: 'none',
          },
          '@media (max-width: 1299px)': {
            display: 'none',
          },
        },
        '& .avatarImage': {
          width: 40,
          height: 40,
          borderRadius: '100%',
          backgroundColor: '#7DCE13',
          justifyContent: 'center',
          display: 'flex',
          marginRight: 10,
          padding: '2px 0px',
          '@media (max-width: 1299px)': {
            display: 'none',
          },
        },

      },
      display: 'flex',
      '& .searchBar': {
        '@media (max-width: 767px)': {
          display: 'none',
        },
        display: 'flex',
        justifyContent: 'space-between',
        '& a': {
          marginRight: 20,
        }
      },
      
      '& .menuIcon': {
        display: 'none',
        '@media (max-width: 767px)': {
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
    },
  },
  sidebarShow: {
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'block',
      backgroundColor: '#FFFFFF',
      alignItems: 'flex-end',
      width: `${sidebarWidth - 50}px`,
      height: '100%',
      position: 'absolute',
      right: 0,
      borderLeft: '1px solid #E0E0E0',
    },
    '& .sidebar': {
      width: '100%',
      marginLeft: 20,
    },

  },
 
})

export default styles;