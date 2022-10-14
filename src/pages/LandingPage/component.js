import React from 'react';
import { ButtonFilled, ButtonGhost, Card } from '../../components/elements';
import PageBase from '../../components/layouts/PageBase';
import { IMAGES, ROUTES } from '../../configs';
import { getUserSession } from '../../utils/commons';


export default class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: '',
    };
  }


  componentDidMount() { 
    const user = getUserSession();
    const { name } = user;
    console.log(user);
    this.setState({ isLogin: true, name});
  }


  handleRouteLogin = () => {
    window.location.href = '/login';
  }

  handleRouteRegister = () => {
    window.location.href = '/register';
  }

  handleRouteCard = (id) => {
    window.location.href = ROUTES.CARD_PAGE(id);
    localStorage.setItem('id', id);
    sessionStorage.setItem('path', window.location.pathname);
  }

  renderButton = () => {
    return (
      <>
        <ButtonFilled className="btn-login" link={ROUTES.LOGIN()}>Login</ButtonFilled>
        <ButtonGhost className="btn-register" link={ROUTES.REGISTER()}>Register</ButtonGhost></>
    );
  }

  render() {
    const { classes } = this.props;
    const data = [
      {
        title: 'Buku 1',
        estimasi: '2',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: IMAGES.BOOK1,
        id: 1
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: IMAGES.BOOK2,
        id: 2
      },
    ]
    const { isLogin, name, token, id } = this.state;
  return(
    <PageBase>
      <div className={classes.landingPage}>
        <div>
          <img src={IMAGES.BANNER} alt="landingPage" />
        </div>
        <div className="landingPageContent">
          {isLogin === true? (
            <h1>Selamat datang , {name} </h1>) : this.renderButton()
          }
        </div>
        <div className="cardProduct">
          <h1>Produk</h1>
          <div className="cardProductContent">
            {data.map((item) => {
              return(
                <Card
                  title={item.title}
                  estimasi={item.estimasi}
                  owner={item.owner}
                  stock={item.stock}
                  price={item.price}
                  image={item.image}
                  onClick={() => this.handleRouteCard(item.id)}
                />
              )
            }
            )}
          </div>
        </div>
      </div>
    </PageBase>
  );
}
}
