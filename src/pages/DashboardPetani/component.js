import React from "react";
import PagePetani from "../../components/layouts/PagePetani";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ButtonFilled2, ButtonFilled, Card } from "../../components/elements";
import { Row, Col } from "antd";

export default class DashboardPetani extends React.Component {


  renderTransaksi() {
    return (
      <div className="transaksi">
        <h2>Riwayat Transaksi</h2>
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
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Pesanan Berhasil'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Pesanan Berhasil'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Pesanan Berhasil'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Pesanan Berhasil'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
            </Row>
        </div>
      </div>
    );
  }

  renderPesanan() {
    return (
      <div className="transaksi">
        <h2>Pesanan Berlangsung</h2>
        <div className="wrapperCard">
          <div className="headerComp">
          </div>
            <Row className="productCard">
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
              <Card
                key='1'
                title='Kentang'
                estimasi=' 2 Hari'
                owner='Pak Sutanto'
                price='Sedang Diproses'
                image='https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png'
              />
            </Row>
        </div>
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

  render() {
    const { classes } = this.props;
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
                    <h1>Selamat datang petaniku</h1>
                    <p>Tambahkan produk baru untuk dijual</p>
                  </div>
                </div>
                <div className="addSmall">
                  <ButtonFilled2 type="link">Tambah</ButtonFilled2>
                </div>
              </div>
            </div>
            <div className="add">
              <ButtonFilled2 type="link">Tambah</ButtonFilled2>
            </div>
          </div>
          {this.renderInformasi()}
          {this.renderTransaksi()}
          {this.renderPesanan()}
        </div>
      </PagePetani>
    );
  }
}
