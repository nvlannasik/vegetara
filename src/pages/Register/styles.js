import { IMAGES } from "../../configs";
const Styles = (theme) => ({
  container: {
    backgroundImage: `url(${IMAGES.BANNER_LOGIN})`,
    width: '100%',
    justifyContent: 'center',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
  },
  cardRegister: {
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    top: 200,
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    margin: '0 83px',
    padding: '25px 48px',
    border: '2px solid #757575',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    '@media (max-width: 768px)': {
      margin: '0 50px',
      padding: '25px 20px',
    },
    "& .cardRegisterHeader": {
      '& > h1': {
      }
    },
    "& .cardRegisterBody": {
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