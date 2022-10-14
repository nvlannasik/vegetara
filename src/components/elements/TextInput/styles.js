const styles = theme => ({
  formWrapper: {
    marginBottom: '32px',

    '&.error': {
      '& .hint': {
        color: '#f20505',
      },

      '& .input-wrapper': {
        borderColor: '#f20505',
      },
    },

    '& .hint': {
      color: '#424242',
      position: 'absolute',
      marginTop: '4px',
      marginLeft: '8px',
    },

    '& .subtitle-1': {
      color: 'black',
      fontWeight: 'bold',
      margin: 0,
      marginBottom: '8px',
    },

    '&.hasFocus': {
      '&:focus-within': {
        '& .subtitle-1': {
          color: "#7DCE13",
        },
        '& .input-wrapper': {
          borderColor: "#7DCE13",
          boxShadow: '0 0 2px 0 #17827B'
        },
      },

      '& .subtitle-1': {
        color: "#757575",
        fontWeight: 'normal',
        margin: 0,
        marginBottom: '5px',
      },
      '&.hasBold': {
        '&:focus-within': {
          '& .subtitle-1': {
            color: 'black',
          },
          '& .input-wrapper': {
            borderColor: "#7DCE13",
            boxShadow: '0 0 2px 0 #17827B'
          },
        },
        '& .subtitle-1': {
          color: 'black',
          fontWeight: 'bold',
        }
      }
    },

    '& .input-wrapper': {
      padding: '10px',
      border: '1px solid #9E9E9E',
      borderRadius: '10px',
      display: 'flex',
      backgroundColor: '#fff',
      position: 'relative',

      '& input': {
        outline: 'none',
        width: '100%',
        border: 'unset',
        padding: 0,
      },

      '& button': {
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        padding: 0,
        right: '3%',


        '& svg': {
          width: '16.8px',
          height: '16.8px',

          '& path': {
            width: '16.8px',
            height: '16.8px',
          },

        },

      },

    },

    '& .password': {
      width: '60%',
      position: 'relative',
    }
  },
});

export default styles;
