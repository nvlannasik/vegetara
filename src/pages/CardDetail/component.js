import React from 'react'
import {  API, ROUTES } from '../../configs'
import PageBase from '../../components/layouts/PageBase';
import { Col, Row } from 'antd';
import axios from 'axios';
import { get } from 'lodash';
import { ButtonFilled, ButtonGhost } from "../../components/elements";
import { Modal } from "antd";

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      id: localStorage.getItem('idProduct'),
      idUser: localStorage.getItem('id'),
      token: localStorage.getItem('accessToken'),
      totalPrice: 0,
      data: [],
      modal: false,
      modalGagal:false
    }
  }

  componentDidMount() {
    const { id} = this.state;
    this.handleDetailProduct(id);
  }

  handleDetailProduct = (id) => {
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.get(API.getAllProduct + "/" + id,{ headers })
      .then((res) => {
        const data = get(res, 'data.data.product');
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({modalGagal:true})
      })
  }


  handlePostChart = () => {
    const { id, idUser, token } = this.state;
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    }
      let body = {
        "productId": id,
        "userId": idUser,
      }
      axios.post(API.postChart, body, { headers })
      .then((res) => { this.setState({ modal: true })})
      .catch((err) => {this.setState({ modalGagal:true})})
  }

  handleAdd = () => {
    const { count, data } = this.state;
    this.setState({ count: count + 1, totalPrice: data.price * (count + 1) })
  }

  handleMinus = () => {
    const { count, data } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1, totalPrice: data.price * (count - 1) })
    }
  }

  handleOke = () => {
    window.location.href = ROUTES.CHART()
  }
  handleCancel = () => {
    this.setState({
      modal:false, modalGagal:false
    })
  }
  renderModal = () => {
    const { modal, modalGagal } = this.state;
    return (
      <Modal
        title="Delete Product"
        visible={modal || modalGagal}
        onOk={this.handleOke}
        onCancel={this.handleCancel}
      >
        <p>{modal===true?"Sayur berhasil ditambahkan":"sayur sudah pernah ditambahkan"}</p>
      </Modal>
    )
  }

  render() {
    const { count, data } = this.state
    const { classes } = this.props;
    return (
      <PageBase badge={count}>
      <div className={classes.detailCard}>
          <div className={classes.informationDetails}>
            <br></br>
            {this.renderModal()}
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
                  <ButtonFilled  onClick={this.handlePostChart}><b>+ Keranjang</b></ButtonFilled>
                  <ButtonGhost className={classes.checkout}><b>Beli</b></ButtonGhost>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      </PageBase>
    )
  }
}


