import React from 'react';
import { ButtonFilled, ButtonGhost, Card, ModalExpired } from '../../components/elements';
import PageBase from '../../components/layouts/PageBase';
import { IMAGES, ROUTES } from '../../configs';
import { getUserSession } from '../../utils/commons';
import { Row } from 'antd';


export default class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      name: '',
      isModalExpired: false,
      role: '',
    };
  }


  componentDidMount() { 
    const user = getUserSession();
    const { name, role } = user;
    if (role === 'user') {
      this.setState({ isLogin: true, name });
    }
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
  handleModalExpired = () => {
    this.setState({ isModalExpired: !this.state.isModalExpired });
  }
  renderModalExpired = () => {
    const { isModalExpired } = this.state;
    return (
      <ModalExpired
        open={isModalExpired}
        handleClose={()=> window.location.href= ROUTES.LOGIN()}
        />
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
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 1
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 2
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 3
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 4
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 5
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 6
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 7
      },
      {
        title: 'Buku 2',
        estimasi: '3',
        owner: 'Loken Hong',
        stock: 'Tersedia',
        price: 'Rp. 100.000',
        image: "https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png",
        id: 8
      },
    ]
    const { isLogin, name, token, id } = this.state;
  return(
    <PageBase>
      <div className={classes.landingPage}>
        {this.renderModalExpired()}
        <div>
          <img src={IMAGES.BANNER} alt="landingPage" />
        </div>
        
        <div className={classes.cardProduct}>
          <div className={classes.cardProductContent}>
            <h1 className={classes.titleProduct}>Produk</h1>
          <Row>
            {data.map((item) => {
              return(
                <Card
                  title={item.title}
                  estimasi={item.estimasi}
                  owner={item.owner}
                  stock={item.stock}
                  price={item.price}
                  image={item.image}
                  onClick={name ? this.handleRouteCard.bind(item.id) : this.handleModalExpired}
                />
              )
            }
            )}
          </Row>
          </div>
        </div>
      </div>
    </PageBase>
  );
}
}

