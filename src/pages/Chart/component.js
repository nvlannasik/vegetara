import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row,Col,Modal} from 'antd';
import { ROUTES, API } from '../../configs';
import axios from 'axios';

export default class ChartPage extends React.Component{
    constructor(props) {
    super(props)
    this.state = {
        count:1,
        idUser: localStorage.getItem('id'),
        token: localStorage.getItem('accessToken'),
        data: [],
        modalDelete: false,
        totalProduct: 0,
        totalHarga: 0,
        pajak:500,
    }
    }

    componentDidMount() {
        this.handleGetAllProduct()
    }

    handleGetAllProduct() {
        const { idUser, token, count } = this.state;
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': token,
        }
        axios.get(API.postChart + "/"+ idUser, { headers })
            .then((res) => {
                const data = res.data.data.carts;
                data.map((item) => (
                    item.product.map((item, index) => (
                        item.count = count
                        
                    ))
                ))
                data.map((item) => (
                    item.product.map((item, index) => (
                        this.setState({ totalHarga :this.state.totalHarga + item.price })
                    ))
                ))
                this.setState({ data, totalProduct: data.length })
            })

    }

    handleAdd = (id) => {
        console.log(id);
        const { data  } = this.state;
        data.map((item) => (
            item.product.map((item, index) => (
                item._id === id ? item.count += 1 : null
            ))
        ))
        this.setState({ data, totalProduct: this.state.totalProduct + 1 }, () => {
            data.map((item) => (
                item.product.map((item, index) => (
                    // eslint-disable-next-line react/no-direct-mutation-state
                    item._id === id && this.setState({ totalHarga: this.state.totalHarga +=item.price })
                )) 
            ))
        })
    }
    
    handleSubstract = (id) => {
        const { data } = this.state;
            data.map((item) => (
                item.product.map((item, index) => (
                    item._id === id ? 
                    item.count > 1 ? item.count -= 1 : this.handleDelete(id) : null
                ))
            ))
        this.setState({ data, totalProduct: this.state.totalProduct - 1 }, () => {
            data.map((item) => (
                item.product.map((item, index) => (
                    // eslint-disable-next-line react/no-direct-mutation-state
                    item._id === id && this.setState({ totalHarga: this.state.totalHarga -= item.price })
                ))
            ))
        })
    }

    handleDelete = (id) => {
        this.setState({ modalDelete: true })
    }

    renderModalDelete = () => {
        const { modalDelete } = this.state;
        return (
            <Modal
                title="Delete Product"
                visible={modalDelete}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <p>Are you sure want to delete this product?</p>
            </Modal>
        )
    }

    formatRupiah = (angka, prefix) => {
        var number_string = angka.toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        
        if (ribuan) {
            let separator;
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }

    render() {
        const { classes } = this.props;
        const { data, totalProduct, totalHarga, pajak } = this.state;

    return(
        <PageBase >
            <div className={ classes.checkoutSection }>
                <Row justify='center'>
                    {this.renderModalDelete()}
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className={ classes.checkoutCol } align="left">
                        <div className={ classes.headerTitle }>
                            <div className= { classes.titlechart }>
                                <h2 className={ classes.h2checkout }>Keranjang</h2>
                            </div>
                        </div>
                        {data.map((item) => (
                            item.product.map((item,index) => (
                                <Row key={item.id} className={classes.priceDetails} justify="center" align="middle">
                                    <Col span={5} align="center">
                                        <img src={item.imageUrl} className={classes.imageRadius} alt="cardImage" width={"98%"} />
                                    </Col>
                                    <Col span={18} className={classes.descItems}>
                                        <p className={classes.titleItems}>{item.name}</p>
                                        <p className={classes.hargaItems}>Total Harga : {item.price}</p>
                                        <div className={classes.costumizeItems}>
                                            <div className={classes.operation}>
                                                <button onClick={this.handleSubstract.bind(this,item._id)} className={classes.plusMinusButton}><MinusCircleOutlined className={classes.plusminusIcon} /></button>
                                                <span className={classes.count}>{item.count}</span>
                                                <button onClick={this.handleAdd.bind(this,item._id)} className={classes.plusMinusButton}><PlusCircleOutlined className={classes.plusminusIcon} /></button>
                                            </div>
                                            <div className={classes.dropItems}>
                                                <button onClick={this.handleDelete.bind(this.item_id)} className={classes.deleteButton}><DeleteOutlined className={classes.deleteIcon} /></button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                        ))
                        ))}
                        
                        <hr className={ classes.breakLine }></hr>
                        
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={5} className={ classes.checkoutCol } align="left">
                        <div className={ classes.checkoutPanel} >
                            <h2 className={ classes.h2checkout2 }>Ringkasan Belanja</h2>
                            <Row className={ classes.priceDetails } align="center">
                                <Col span={16} align="left">
                                    <p>Total Harga</p>
                                    <p>Total Barang</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p>{totalHarga}</p>
                                    <p>{totalProduct}</p>
                                </Col>
                            </Row>
                            <h3 className={ classes.h3checkout }>Biaya Transaksi</h3>
                            <Row className={ classes.priceDetails } align="center">
                                <Col span={16} align="left">
                                    <p>Biaya Jasa Aplikasi</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p>{pajak}</p>
                                </Col>
                            </Row>

                            <Row className={ classes.totalPrice } align="center">
                                <Col span={16} align="left">
                                    <p className={ classes.overallPrice }>Total Harga</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p className={classes.overallPrice}>{this.formatRupiah(totalHarga + pajak)}</p>
                                </Col>
                            </Row>
                            <div className={ classes.wrapperButton } align="center">
                                <button className={classes.buttonPay} onClick={()=> window.location.href=ROUTES.CHECKOUT()}>Checkout</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageBase>
    );
    }
}
