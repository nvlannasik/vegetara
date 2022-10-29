const styles = (theme) => ({
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& input': {
      width: 300,
      height: 40,
      borderTop: '1px solid #757575',
      borderLeft: '1px solid #757575',
      borderBottom: '1px solid #757575',
      borderRight:'0px',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      padding: '0 10px',
      fontSize: 16,
      fontFamily: 'Inter Tight, sans-serif',
      '&:focus': {
        outline: 'none',
      },
    },
    '& .buttonWrapper': {
      alignItems: 'center',
      borderTop: '1px solid #757575',
      borderLeft: '0px',
      borderBottom: '1px solid #757575',
      borderRight: '1px solid #757575',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius:0,
      height: 40,
      '& svg': {
        height: 40,
        color: '#757575',
        marginLeft: 10,
        marginRight: 10,
        cursor: 'pointer',
      },
    }
  },
});

export default styles;