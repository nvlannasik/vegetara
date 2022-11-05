import React from 'react'
import {  API, ROUTES } from '../../configs'
import PageBase from '../../components/layouts/PageBase';
import { Col, Row } from 'antd';
import axios from 'axios';
import { get } from 'lodash';
import { ButtonFilled } from "../../components/elements";
import { Modal } from "antd";
import moment from 'moment';

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
      modalGagal: false,
      status:false
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
    const { id, idUser, token,data } = this.state;
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    }
      let body = {
        "productId": id,
        "userId": idUser,
    }
    let status = this.handleEstimateTime(data.harvestDate)
    if (status === true) {
        if (!token) {
        window.location.href = ROUTES.LOGIN()
      }else{
        axios.post(API.postChart, body, { headers })
          .then((res) => { this.setState({ modal: true }) })
          .catch((err) => { this.setState({ modalGagal: true }) })
      }
    } else {
      alert("mohon maaf sayur sudah tidak tersedia")
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
        title="Tambah Keranjang"
        visible={modal || modalGagal}
        onOk={this.handleOke}
        onCancel={this.handleCancel}
      >
        <p>{modal===true?"Sayur berhasil ditambahkan":"sayur sudah pernah ditambahkan"}</p>
      </Modal>
    )
  }
  showFormattedDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  handleEstimateTime = (date) => {
    var dateNow = moment().format("YYYY-MM-DD");
    var dateFuture = date;
    if (moment(dateFuture).format("YYYY-MM-DD") > dateNow) {
      return true
    }
    if (moment(dateFuture).format("YYYY-MM-DD") < dateNow) {
      return false
    }
    if (moment(dateFuture).format("YYYY-MM-DD") === dateNow) {
      return true
    }
  };

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
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <h3 className={classes.h3Text}><b>Harga</b></h3>
                    <p>Stok</p>
                    <p>Tanggal panen</p>
                    <p>Alamat</p>
                    <p>Deskripsi</p> 
                    </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <h3 className={classes.h3Text}><b>: {data.price}/{data.satuanJenis}</b></h3>
                    <p>: {data.stock}</p>
                    <p>: {this.showFormattedDate(data.harvestDate)}</p>
                    <p>: {data.alamatPetani}</p>
                    <p>: {data.description}</p>
                  </Col>
                  </Row>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={4} xxl={4} className={classes.rowDetails}>
              <div className = {classes.cardDetails}>
                <h3 className={classes.h3Text}><b>Tambahkan Keranjang</b></h3>
                  <ButtonFilled  onClick={this.handlePostChart} ><b>+ Keranjang</b></ButtonFilled>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      </PageBase>
    )
  }
}


