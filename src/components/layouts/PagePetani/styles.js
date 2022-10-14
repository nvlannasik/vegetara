const appBarHeight = 86;
const styles = (theme) => ({
  container: {
    overflowX: 'hidden',
  },

  appBar: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: `${appBarHeight}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 48px',
    transition: 'all 0.5s ease',
    '@media (max-width: 767px)': {
      padding: '0 40px 0 40px',
    },
    '& .logo': {
     
    },
    '& .rightElement': {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Inter, sans-serif',
        color: '#757575',
        marginRight: '20px',
      },
    },
  },
})

export default styles;