import { render } from '@testing-library/react'
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React from 'react'
import { IMAGES } from '../../configs'
import PageBase from '../../components/layouts/PageBase';
import { Col, Row } from 'antd';

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
    localStorage.setItem('count', this.state.count + 1,"tesd")
  }

  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })

    if (this.state.count === 0) { 
      this.setState({
        count: 0
      })
    }
  }

  render() {
    const { count } = this.state
    const { classes } = this.props;
    return (
      <PageBase badge={count}>
      <div className={classes.detailCard}>
        <div className={classes.informationDetails}>
        <br></br>
          <Row justify='center'>
            <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6} className={classes.rowImage}>
              <img src="https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6} className={classes.rowDesc}>
              <h2><b>Nama Barang</b></h2>
              <hr></hr>
              <h3 className={classes.h3Text}><b>Harga 453534</b></h3>
              <p>Kondisi: Baru<br></br>Berat Satuan: 25 g<br></br>Kategori: Sayur<br></br>Produksi: 25 Juli 2022</p>
              <p className={ classes.descParagraph } align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={4} xxl={4} className={classes.rowDetails}>
              <div className = {classes.cardDetails}>
                <h3 className={classes.h3Text}><b>Atur jumlah Pembelian</b></h3>
                <div className={ classes.counterItems }>
                  <button onClick={this.handleMinus} className={ classes.plusMinusButton }><MinusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                  <span className={ classes.counterText }>{this.state.count}</span>
                  <button onClick={this.handleAdd} className={ classes.plusMinusButton }><PlusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                  <span className={ classes.counterText } >stock: {200 - this.state.count}</span>
                </div>
                <span className={classes.addToChart}><b>+ Keranjang</b></span>
                <span className={classes.checkout}><b>Beli</b></span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      </PageBase>
    )
  }
}


