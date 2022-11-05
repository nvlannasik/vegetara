const Styles = (theme) => ({
  container: {
    height: '100%',
    padding: '20px 20px',
    margin: '20px 20px',
  },
  kilo: {
    display: 'flex',
    '& .kilogram': {
      width: '100%',
    },
    '& .satuan': {
      width: '10%',
      marginLeft: '5px',
      '@media (max-width: 767px)': {
        width: '25%',
      },
      '& p': {
        marginBottom: 5,
      }, '& .ant-select-selector': {
        height: 40,
        width: "100%",
      },
    }
  },
  DragAndDrop: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    '& .drag': {
      width: '100%',
      height: '100%',
    },
    '& .image': {
      width: '100%',
      height: '100%',
      marginTop: 10,  
    },
  },
  buttonFilled: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#757575',
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
      backgroundColor: '#757575',
      color: '#fff',
    },
    '&:focus': {
      backgroundColor: '#757575',
      color: '#fff',
    },
  },
  date: {
    marginBottom: 10,
    '& p': {
      marginBottom: 5,
    },
  }
  
})

export default Styles