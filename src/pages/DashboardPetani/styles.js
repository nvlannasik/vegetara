const Syles = (theme) => ({
  container: {
    overflowX: 'hidden',
    padding: '0 48px',
    '@media (max-width: 767px)': {
      padding: '0 20px',
    },
    '& .addWrapper': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid rgba(125, 125, 125, 0.6)',
      padding: '50px 30px',
      marginBottom: '40px',
      '@media(max-width: 1299px)': {
        display: 'block',
        justifyContent: 'center',
        padding: '30px 10px',
        marginBottom: '20px',
      },
      '& .add': {
        display: 'flex',
        alignItems: 'center',
        width: '200px',
        '@media(max-width: 1299px)': {
          display: 'none',
        },
      },
      '& .logoWrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& .logo': {
        display: 'flex',
        '@media (max-width: 1299px)': {
          justifyContent: 'center',
        },
        '@media (max-width: 767px)': {
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '& .icon': {
          backgroundColor: 'rgba(125, 206, 19, 0.5)',
          width: '200px',
          height: '200px',
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          '@media (min-width: 768px) and (max-width: 1299px)': {
            width: '150px',
            height: '150px',
          },
          '@media (max-width: 767px)': {
            width: '100px',
            height: '100px',
          },
          '& svg': {
            fontSize: '100px',
            color: '#757575',
            '@media (min-width: 768px) and (max-width: 1299px)': {
              fontSize: '80px',
            },
            '@media (max-width: 767px)': {
              fontSize: '40px',
            },
          },
        },
        '& .text': {
          '& .textWrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          marginLeft: '20px',
          '@media (max-width: 767px)': {
            marginLeft: '0',
            justifyContent: 'center',
          },
          '& .addSmall': {
            display: 'none',
            '@media (max-width: 1299px)': {
              display: 'block',
              width: '100%',
            },
          },
          '& h1': {
            fontSize: '36px',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            color: '#757575',
            marginBottom: '0px',
            '@media (min-width: 768px) and (max-width: 1299px)': {
              fontSize: '24px',
            },
            '@media (max-width: 767px)': {
              fontSize: '16px',
            },
          },
          '& p': {
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(125, 125, 125, 0.6)',
            marginTop: '0px',
            '@media (min-width: 768px) and (max-width: 1299px)': {
              fontSize: '14px',
            },
            '@media (max-width: 767px)': {
              fontSize: '10px',
            },
          },
        },
      },
    },
    '& .informasi': {
      display: 'flex',
      marginBottom: '40px',
      '@media (max-width: 1299px)': {
        display: 'block',
      },
      '& .informasiWrapper1': {
        marginTop: '20px',
        '@media (max-width: 1299px)': {
         marginRight: '0',
        },
        backgroundColor:'rgba(125, 206, 19, 0.5)',
        width: '100%',
        marginRight: '5px',
        borderRadius: '10px',
        padding: '20px',
        '& h1': {
          fontSize: '24px',
          '@media (max-width: 1299px)': {
            fontSize: '18px',
          },
          '@media (max-width: 767px)': {
            fontSize: '12px',
          },
        },
        '& .contentWrapper': {
          display: 'flex',
          justifyContent: 'space-between',
          '& .content': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& span': {
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              color: '#757575',
              '@media (max-width: 1299px)': {
                fontSize: '14px',
              },
              '@media (max-width: 767px)': {
                fontSize: '10px',
              },
            },
            '& p': {
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              color: '#757575',
              '@media (max-width: 1299px)': {
                fontSize: '14px',
              },
              '@media (max-width: 767px)': {
                fontSize: '10px',
              },
            },
          }
        },
      },
      '& .informasiWrapper2': {
        marginTop: '20px',
        backgroundColor: 'rgba(125, 206, 19, 0.5)',
        width: '100%',
        borderRadius: '10px',
        marginLeft: '5px',
        padding: '20px',
        '@media (max-width: 1299px)': {
          marginLeft: '0',
        },
        '& h1': {
          fontSize: '24px',
          '@media (max-width: 1299px)': {
            fontSize: '18px',
          },
          '@media (max-width: 767px)': {
            fontSize: '12px',
          },
        },
        '& .contentWrapper': {
          display: 'flex',
          justifyContent: 'space-between',
          '& .content': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& span': {
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              color: '#757575',
              '@media (max-width: 1299px)': {
                fontSize: '14px',
              },
              '@media (max-width: 767px)': {
                fontSize: '10px',
              },

            },
            '& p': {
              fontWeight: 'bold',
              fontFamily: 'Inter, sans-serif',
              color: '#757575',
              '@media (max-width: 1299px)': {
                fontSize: '14px',
              },
              '@media (max-width: 767px)': {
                fontSize: '10px',
              },
            },
          }
        },
      },
    },
    '& .transaksi': {
      display: 'block',
      width: '100%',
      padding: '5px 20px',
      marginBottom: '50px',
      '& h2': {
        fontWeight: 'bold',
      },
      '& .wrapperCard': {
        border: '1px solid rgba(125, 125, 125, 0.6)',
      },
      '& .headerComp': {
        height: '45px',
        maxWidth : '280px',
        minWidth : '120px',
        backgroundColor: '#7DCE13',
        borderBottomRightRadius : '20px',
      },
      '& .productCard': {
        paddingTop: '25px',
      },
    },
  },
  priceTag: {
      height: 25,
      paddingBottom: 15,
      paddingLeft: 75,
      paddingRight: 75,
      borderRadius: 10,
      color: "white",
      paddingTop: 15,
    backgroundColor: "#7DCE13",
    '@media (max-width: 1299px)': {
      paddingLeft: 50,
      paddingRight: 50,
    },
    '@media (max-width: 767px)': {
      paddingLeft: 25,
      paddingRight: 25,
    },
  }

});

export default Syles;
