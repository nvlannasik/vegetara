import React from "react";
import PagePetani from "../../components/layouts/PagePetani";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ButtonFilled2, ButtonFilled } from "../../components/elements";

export default class DashboardPetani extends React.Component {


  renderTransaksi() {
    return (
      <div className="transaksi">
        <h2>TransaksiTest</h2>
        <div className="card">
          <div className="keterangan">
            <span>Nama:ujang</span>
            <span>Produk:Wortel</span>
            <span>jumlah :1 kg</span>
            <span>total:Rp 10.000</span>
          </div>
          <div className="status">
            <ButtonFilled>Terima</ButtonFilled>
          </div>
          <div className="status">
            <ButtonFilled>Tolak</ButtonFilled>
          </div>
        </div>
        <div className="card">
          <button>
            <span>Wortel</span>
            <p>jumlah :1 kg</p>
            <p>total:Rp 10.000</p>
          </button>
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
        </div>
      </PagePetani>
    );
  }
}
