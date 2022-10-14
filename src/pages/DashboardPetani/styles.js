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
        '@media (max-width: 1299px)': {
         marginRight: '0',
        },
        backgroundColor:'rgba(125, 206, 19, 0.5)',
        width: '100%',
        marginRight: '5px',
        padding: '0px 20px 20px 20px',
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
        backgroundColor: 'rgba(125, 206, 19, 0.5)',
        width: '100%',
        marginLeft: '5px',
        padding: '0px 20px 20px 20px',
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
      border: '1px solid #757575',
      padding: '20px 20px',
      '& h2': {
        margin: '10px 10px',
      },
      '& .card': {
        width: '100%',
        display: 'flex',
        marginBottom: '20px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        alignItems: 'center',
        padding: '10px 10px',
        '@media (max-width: 767px)': {
          flexDirection: 'column',
        },
        '& .keterangan': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          '& span': {
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            color: '#757575',
          },
        },
      },
    },
  },

});

export default Syles;
