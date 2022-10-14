const Styles = (theme) => ({
  buttonFilled: {
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'rgba(125, 206, 19, 0.5)',
    cursor: 'pointer',
    color: '#000',
    fontSize: '16px',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    width: '100%',
    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
    '&:hover': {
      backgroundColor: '#8FCF3C',
    },
    '&:focus': {
      backgroundColor: '#8FCF3C',
    },
  }

});

export default Styles;