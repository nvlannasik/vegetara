import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Row,Col,Select } from 'antd';

export default class ChartPage extends React.Component{
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
        const { classes } = this.props;
        const { count } = this.state;

    return(
        <PageBase>
            <div className={ classes.checkoutSection }>
                <Row justify='center'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className={ classes.checkoutCol } align="left">
                        <div className={ classes.headerTitle }>
                            <div className= { classes.titlechart }>
                                <h2 className={ classes.h2checkout }>Keranjang</h2>
                            </div>
                            <div className= { classes.selectAll }>
                                <input type="checkbox" /> <span style={{ fontSize: "15px", marginLeft: 5,}}>Pilih Semua Item</span>
                            </div>
                        </div>
                        <Row className={ classes.priceDetails } justify="center" align="middle">
                            <Col span={1}>
                                <input type="checkbox" />
                            </Col>
                            <Col span={5} align="center">
                                <img src="https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
                            </Col>
                            <Col span={18} className={ classes.descItems }>
                                <p className={ classes.titleItems}>Nama Barang yang mau di checkout</p>
                                <p className={ classes.hargaItems }>Total Harga : 250.000</p>
                                <div className={ classes.costumizeItems }>
                                    <div className={ classes.operation}>
                                        <button onClick={this.handleMinus} className={ classes.plusMinusButton }><MinusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                                        <span className={ classes.counterText }>{this.state.count}</span>
                                        <button onClick={this.handleAdd} className={ classes.plusMinusButton }><PlusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                                    </div>
                                    <div className={ classes.dropItems }>
                                        <button className={ classes.deleteButton }><DeleteOutlined style={{ fontSize: '18px', color: 'red'}}/></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{ border : "3px solid #F3F4F5", marginBottom: 20}}></hr>
                        
                        <Row className={ classes.priceDetails } justify="center" align="middle">
                            <Col span={1}>
                                <input type="checkbox" />
                            </Col>
                            <Col span={5} align="center">
                                <img src="https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"  style={{ borderRadius: 10 }} alt="cardImage" width={"98%"}/>
                            </Col>
                            <Col span={18} className={ classes.descItems }>
                                <p className={ classes.titleItems}>Nama Barang yang mau di checkout</p>
                                <p className={ classes.hargaItems }>Total Harga : 250.000</p>
                                <div className={ classes.costumizeItems }>
                                    <div className={ classes.operation}>
                                        <button onClick={this.handleMinus} className={ classes.plusMinusButton }><MinusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                                        <span className={ classes.counterText }>{this.state.count}</span>
                                        <button onClick={this.handleAdd} className={ classes.plusMinusButton }><PlusCircleOutlined style={{ fontSize: '18px', color: '#7DCE13'}}/></button>
                                    </div>
                                    <div className={ classes.dropItems }>
                                        <button className={ classes.deleteButton }><DeleteOutlined style={{ fontSize: '18px', color: 'red'}}/></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <hr style={{ border : "3px solid #F3F4F5", marginBottom: 20}}></hr>
                        

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
                                    <p>250.000</p>
                                    <p>5</p>
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
                                    <p style={{ fontSize: "18px" }}>Total Harga</p>
                                </Col>
                                <Col span={8} align="right">
                                    <p style={{ fontSize: "18px" }}>250.000</p>
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
