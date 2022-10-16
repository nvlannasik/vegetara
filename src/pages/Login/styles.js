import { IMAGES } from "../../configs";
const Styles = (theme) => ({
  container: {
    backgroundImage: `url(${IMAGES.BANNER_LOGIN})`,
    width: '100%',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    position: 'absolute',
  },
  cardLogin: {
    justifyContent: 'center',
    display: 'block',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    margin: '70px 83px',
    padding: '25px 48px',
    border: '2px solid #757575',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    '@media (max-width: 768px)': {
      margin: '100px 50px',
      padding: '25px 20px',
    },
    "& .cardLoginHeader": {
      '& a': {
        color: '#757575',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          color: '#7DCE13',
        },
      },
      '& > h1': {
      }
    },
    "& .cardLoginBody": {
      '& .form-group': {
        '& .forgotPassWrapper': {
          display: 'flex',
          justifyContent: 'flex-end',
          '& .forgotPassword': {
            color: '#757575',
            textDecoration: 'none',
          },
        },
        '& .buttonWrapper': {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: 25,
        },
        '& .registerWrapper': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 25,
          '& .registerText': {
            color: '#757575',
            margin: '0'
          },
          '& .registerLink': {
            color: '#7DCE13',
            textDecoration: 'none',
            marginLeft: 5,
          },
        },
      }
    }
  },
});

export default Styles;