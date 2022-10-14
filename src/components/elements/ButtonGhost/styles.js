const Styles = (theme) => ({
  buttonGhost: {
    padding: '10px 20px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #7DCE13',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    color: '#7DCE13',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '1px solid #8FCF3C',
    },
    '&:focus': {
      backgroundColor: '#FFFFFF',
      border: '1px solid #8FCF3C',
    },
  }

});

export default Styles;