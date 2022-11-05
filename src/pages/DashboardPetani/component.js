import React from "react";
import PagePetani from "../../components/layouts/PagePetani";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {  ButtonFilled, Card } from "../../components/elements";
import { Row } from "antd";
import PropTypes from "prop-types";
import { ROUTES, API } from "../../configs";
import axios from "axios";

export default class DashboardPetani extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem("name"),
      data:[],
    };
  }

  componentDidMount() {
      this.handleGetOverview();
  }

  handleGetOverview = () => {
    let id = localStorage.getItem("id");  
    let token = localStorage.getItem("accessToken");
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token-petani": token,
    };
    axios.get(API.getOverviewPetani+id, { headers}).then((res) => {
      const data = res.data.data;
      this.setState({ data });
    });
  };


  renderTransaksi() {
    const { classes } = this.props;
    return (
      <div className="transaksi">
        <h2>Riwayat</h2>
        <div className="wrapperCard">
          <div className="headerComp">
          </div>
            <Row className="productCard">
            <Card
              key='1'
              title='Kentang'
              estimasi=' 2 Hari'
              owner='Pak Sutanto'
              price='Pesanan Berhasil'
              image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              classes={{ priceText: classes.priceTag }}
            />
            </Row>
        </div>
      </div>
    );
  }

  renderPesanan() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className="transaksi">
        {data.map((data) => (
          <>
            <h2>Transaksi {data.id}</h2>
        <div className="wrapperCard">
          <div className="headerComp">
          </div>
            <Row className="productCard">
            {data.product.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  estimasi={data.status}
                  owner={data.userId}
                  price={item.price}
                  image={item.imageUrl}
                  classes={{ priceText: classes.priceTag }}
                />
            ))}
          </Row>
          <ButtonFilled>Terima pesanan</ButtonFilled>
          <ButtonFilled classes={{ buttonFilled: classes.buttonFilled }}>Tolak pesanan</ButtonFilled>
        </div>
          </>
        ))}
      </div>
    );
  }

  renderInformasi = () => {
    return (
      <div className="informasi">
        <div className="informasiWrapper1">
          <div className="title">
            <h1>Pesanan</h1>
          </div>
          <div className="contentWrapper">
            <div className="content">
              <span>0</span>
              <p>Pesanan Baru</p>
            </div>
            <div className="content">
              <span>0</span>
              <p>Belum Dibayar</p>
            </div>
            <div className="content">
              <span>0</span>
              <p>Pesanan Selesai</p>
            </div>
          </div>
        </div>
        <div className="informasiWrapper2">
          <div className="title">
            <h1>Produk</h1>
          </div>
          <div className="contentWrapper">
            <div className="content">
              <span>0</span>
              <p>Produk Anda</p>
            </div>
            <div className="content">
              <span>0</span>
              <p>Pemasukan Anda</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  handleCreateProduct = () => {
    window.location.href = ROUTES.CREATE_PRODUCT();
  };
  render() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <PagePetani>
        <div className={classes.container}>
          <div className="addWrapper">
            <div className="logo">
              <div className="logoWrapper">
                <div className="icon">
                  <ShoppingBasketIcon className="basket" />
                </div>
              </div>
              <div className="text">
                <div className="textWrapper">
                  <div>
                    <h1>Selamat datang {name}</h1>
                    <p>Tambahkan produk baru untuk dijual</p>
                  </div>
                </div>
                <div className="addSmall">
                  <ButtonFilled  onClick={this.handleCreateProduct} >Tambah</ButtonFilled>
                </div>
              </div>
            </div>
            <div className="add">
              <ButtonFilled  onClick={this.handleCreateProduct}>Tambah</ButtonFilled>
            </div>
          </div>
          {this.renderInformasi()}
          {this.renderPesanan()}
          {this.renderTransaksi()}
        </div>
      </PagePetani>
    );
  }
}

DashboardPetani.propTypes = {
  classes: PropTypes.object.isRequired
};

