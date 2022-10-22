import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import React from 'react'
import { IMAGES, API } from '../../configs'
import PageBase from '../../components/layouts/PageBase';
import { Col, Row } from 'antd';
import axios from 'axios';
import { get } from 'lodash';

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      id: localStorage.getItem('idProduct'),
      token: localStorage.getItem('accessToken'),
      data: [],
    }
  }

  componentDidMount() {
    const { id, token } = this.state;
    console.log(token)
    this.handleDetailProduct(id, token);
  }

  handleDetailProduct = (id, token) => {
    
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token
    }
    axios.get(API.getAllProduct + "/" + id,{ headers })
      .then((res) => {
        const data = get(res, 'data.data.product');
        this.setState({ data });
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      }
      )
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
    const { count, data } = this.state
    const { classes } = this.props;
    return (
      <PageBase badge={count}>
      <div className={classes.detailCard}>
        <div className={classes.informationDetails}>
        <br></br>
          <Row justify='center'>
            <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6} className={classes.rowImage}>
              <img src={data.imageUrl}  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6} className={classes.rowDesc}>
                <h2><b>{data.name}</b></h2>
              <hr></hr>
                <h3 className={classes.h3Text}><b>Harga {data.price}</b></h3>
                <p>Kondisi: Baru<br></br>Berat Satuan: 25 g<br></br>Kategori: Sayur<br></br>Waktu Panen: {data.harvestDate}</p>
                <p className={classes.descParagraph} align="justify">{data.description}</p>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={4} xxl={4} className={classes.rowDetails}>
              <div className = {classes.cardDetails}>
                <h3 className={classes.h3Text}><b>Atur jumlah Pembelian</b></h3>
                <div className={ classes.counterItems }>
                  <button onClick={this.handleMinus} className={ classes.plusMinusButton }><MinusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                  <span className={ classes.counterText }>{this.state.count}</span>
                  <button onClick={this.handleAdd} className={ classes.plusMinusButton }><PlusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                  <span className={ classes.counterText } >stock: {data.stock}</span>
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


