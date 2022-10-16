const Styles = (theme) => ({
  buttonFilled: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#7DCE13',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    width: '100%',
    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
    '&:hover': {
      backgroundColor: '#8FCF3C',
      color: '#fff',
    },
    '&:focus': {
      backgroundColor: '#8FCF3C',
      color: '#fff',
    },
  }

});

export default Styles;