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
  cardLogin: {
    justifyContent: 'center',
    position: 'relative',
    top: 200,
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    margin: '0 83px',
    padding: '20px 40px',
    border: '2px solid #757575',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
});

export default Styles;