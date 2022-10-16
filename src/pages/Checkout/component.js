import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { Row,Col,Select } from 'antd';

export default class CheckoutPage extends React.Component{
    render() {
        const { classes } = this.props;
        const { Option } = Select;
        
    return(
        <PageBase>
            <div className={ classes.checkoutSection }>
                <Row justify='center'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className={ classes.checkoutCol } align="left">
                        <h2 className={ classes.h2checkout }>Barang yang dibeli</h2>
                        <Row className={ classes.priceDetails } align="center">
                            <Col span={6} align="center">
                                <img src="https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
                            </Col>
                            <Col span={18} className={ classes.descItems }>
                                <p className={ classes.titleItems}>Nama Barang yang mau di checkout</p>
                                <p className={ classes.jumlahItems } >Jumlah : 10pcs</p>
                                <p className={ classes.totalHargaItems }>Total Harga : 250.000</p>
                            </Col>
                        </Row>
                        <Row className={ classes.priceDetails } align="center">
                            <Col span={6} align="center">
                                <img src="https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
                            </Col>
                            <Col span={18} className={ classes.descItems }>
                                <p className={ classes.titleItems}>Nama Barang yang mau di checkout</p>
                                <p className={ classes.jumlahItems } >Jumlah : 10pcs</p>
                                <p className={ classes.totalHargaItems }>Total Harga : 250.000</p>
                            </Col>
                        </Row>

                        <h2 className={ classes.h2checkout }>Pengiriman dan pembayaran</h2>
                        <p className={ classes.Address} >
                            <p className={ classes.AddressTitle } align="center">Alamat Utama</p> Alamat yang dimasukkan user akand ditampilkan disini, click untuk mengubah
                        </p>
                        
                        <div className={ classes.pengiriman}>
                            <p>Pilih Jasa Pengiriman</p>
                            <Select defaultValue="Ojek Pengkolan" style={{ width: "100%"}}>
                                <Option value="Ojek Pengkolan">Ojek Pengkolan</Option>
                                <Option value="Ojek Online">Ojek Online</Option>
                                <Option value="Ambil Ditempat">Ambil Ditempat</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={5} className={ classes.checkoutCol } align="left">
                        <div className={ classes.checkoutPanel} >
                            <h2 className={ classes.h2checkout }>Ringkasan Belanja</h2>
                            <Row className={ classes.priceDetails } align="center">
                                <Col span={16} align="left">
                                    <p>Total Harga (1 Barang)</p>
                                    <p>Total Ongkos Kirim</p>
                                    <p>Asuransi Pengiriman</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p>200.000</p>
                                    <p>25.000</p>
                                    <p>225.000</p>
                                </Col>
                            </Row>
                            <h3 className={ classes.h3checkout }>Biaya Transaksi</h3>
                            <Row className={ classes.priceDetails } align="center">
                                <Col span={16} align="left">
                                    <p>Biaya Jasa Aplikasi</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p>5.000</p>
                                </Col>
                            </Row>

                            <Row className={ classes.totalPrice } align="center">
                                <Col span={16} align="left">
                                    <p style={{ fontSize: "18px" }}>Total Tagihan</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p style={{ fontSize: "18px" }}>230.000</p>
                                </Col>
                            </Row>
                            <div className={ classes.wrapperButton } align="center">
                                <button className={classes.buttonPay}>Bayar</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageBase>
    );
    }
}