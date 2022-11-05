const Styles = () => ({
  modalPlain: {
    
    "& .ant-modal-content": {
      background:
        "radial-gradient(26.83% 62.17% at 73.6% 56.83%, rgba(255, 249, 223, 0.954198) 0%, rgba(255, 249, 223, 0) 100%), radial-gradient(45% 85% at 75.5% 50%, #7DCE13 18.99%, rgba(228, 247, 246, 0) 100%), #7DCE13",
      borderRadius: 10,
      height: 348,
      width: 1000,
      margin: "auto",
      "@media (min-width: 768px) and (max-width: 1299px)": {
        height: 316,
        width: 736
        
      },
      "@media (max-width:767px)": {
        height: 449,
        width: 332,
        background:
          "radial-gradient(28.6% 21.83% at 64.76% 83.63%, rgba(255, 249, 223, 0.954198) 0%, rgba(255, 249, 223, 0) 100%), radial-gradient(59.6% 39.81% at 61.9% 79.01%, #7DCE13 18.99%, rgba(228, 247, 246, 0) 100%), #7DCE13",
      },
    },
   
    "& .ant-modal-body": {
      padding: "40px 46px",
      "@media (max-width:767px)": {
        padding: "0px",
      },
    },
    "& .ant-modal-close-x": {
      width: 24,
      height: 24,
      lineHeight: "24px",
      margin: 8,
    },
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    '@media (max-width:767px)': {
      display: "block",
      justifyContent: "center",
    },
    '& .left': {
      '@media (max-width:767px)': {
        textAlign: "center",
        padding: '40px 30px',
      },
      '& .logo': {
        width: 100,
        height: 90,
        display: 'flex',
        '@media (max-width:767px)': {
          width: 60,
          height: 60,
        },
        '& .bumn': {
          width: '120px',
          height: '33px',
          margin:'2px',
          '@media (max-width:767px)': {
            width: '100px',
            height: '20px',
          },
        },
        '& .inno': {
          width: '120px',
          height: '33px',
          margin: '2px',
          '@media (max-width:767px)': {
            width: '100px',
            height: '20px',
          },
        },
        '& .telu': {
          width: '120px',
          height: '33px',
          margin: '2px',
          '@media (max-width:767px)': {
            width: '100px',
            height: '20px',
          },
        },
        '& .pttelkom': {
          width: '120px',
          height: '33px',
          margin: '2px',
          '@media (max-width:767px)': {
            width: '100px',
            height: '20px',
          },
        },
      },
      '& .title': {
        '& h1': {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#000000',
          fontFamily: 'Montserrat, sans-serif',
          margin:0,
          '@media (max-width:1299px)': {
            fontSize: '18px',
          },
          '@media (max-width:767px)': {
            fontSize: '14px',
          },
        },
        '& p': {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#000000',
          fontFamily: 'Montserrat, sans-serif',
          '@media (max-width:1299px)': {
            fontSize: '12px',
          },
          '@media (max-width:767px)': {
            fontSize: '10px',
          },
        },
        '& img': {
          width: '370px',
          '@media (max-width:1299px)': {
            width: '250px',
          },
          '@media (max-width:767px)': {
            width: '150px',
          },
        }
      },
    },
    '& .right': {
      '& img': {
        width: 350,
        height: 270,
        margin: 0,
        '@media (min-width: 768px) and (max-width: 1299px)': {
          width: 270,
          height: 190,
          margin: '42px 0px 0px 22px',
        },
        '@media (max-width:767px)': {
          width: 223,
          height: 145,
          position: 'absolute',
          top: 280,
          left: 55,
          margin: '0px'
        },
      }
    }
  }
});

export default Styles;
