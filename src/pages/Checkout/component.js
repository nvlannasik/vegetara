import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { Row, Col, Select } from 'antd';
import { ROUTES, API } from '../../configs';
import { TextInput, } from '../../components/elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default class CheckoutPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            totalHarga: 0,
            nameProduct: '',
            dataCheckout: [],
            ongkos: 0,
            address:'',
            service:'',
            method: '',
        totalProduct: 0,
            
        };
    }

    componentDidMount() {
        this.handleGetAllData()
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

    // handlePostCheckout = () => {
    //     const { dataCheckout, ongkos } = this.state;
    //     const { history } = this.props;
    //     const data = {
    //         dataCheckout,


    handleGetAllData = () => {
        let datas = JSON.parse(sessionStorage.getItem('dataCheckout'));
        if (!datas) {
            window.location.href = ROUTES.LANDING_PAGE()
        } else {
            let dataProduct;
            let dataCheckout = [];
            dataCheckout = datas.map((item) => ({
                totalHarga: item.totalHarga,
                totalProduct: item.totalProduct,

            }))
            dataProduct = datas.map((data) => {
                return data.data
            })

            const productCheckout = dataProduct.map((data) => {
                return data.map((data) => {
                    return data.product.map((data) => ({
                        name: data.name,
                        price: data.price,
                        quantity: data.count,
                        image: data.imageUrl,
                        id: data._id
                    }))
                })
            })
            this.setState({
                data: productCheckout, dataCheckout
            })
        }
    }

    handleSubmit = (values) => {
        const { data, dataCheckout} = this.state;
        const { address, service } = values;
        let idProduct = [];
        data.map((data) => {
            return data.map((data) => {
                return data.map((data) => {
                   return idProduct.push(data.id)
                })
            })
        })
      
        let totalHarga = 0;
        let totalProduct = 0;
        dataCheckout.map((data) => {
            return totalHarga += data.totalHarga
        })
        dataCheckout.map((data) => {
            return totalProduct += data.totalProduct
        })
        const body = {
            "productId": idProduct,
            "userId": localStorage.getItem('id'),
            "quantity": totalProduct,
            "totalPrice": totalHarga,
            "userAddress": address,
            "jasaPengiriman": service,
        }
        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('accessToken')
        }
        axios.post(API.checkout, body, { headers }).then((res) => {
            console.log(res)
        }
        ).catch((err) => {
            console.log(err)
        }
        )

        
    }
    renderFormPengiriman = ({
        values,
        errors,
        touched,
        handleChange: _handleChange,
        handleBlur: _handleBlur,
        handleSubmit: _handleSubmit,
        isSubmitting,
    }) => {
        const { classes } = this.props;
        const handleChangeService = (value) => {
            _handleChange({ target: { name: 'service', value } })
        }
        const handleChangeMethod = (value) => {
            _handleChange({ target: { name: 'method', value } })
        }
        const options = [
            { value: 'Ambil ditempat', label: 'Ambil ditempat' },
        ]
        const optionsMetode = [
            { value: 'Bayar saat terima barang(COD)', label: 'Bayar saat terima barang(COD)' },
        ]
        const { dataCheckout, ongkos } = this.state;
        return (
            <>
                <form onSubmit={_handleSubmit}>
                    <h2 className={classes.h2checkout}>Pengiriman dan pembayaran</h2>
                    <p className={classes.AddressTitle} align="center">Masukan Alamat Pengiriman</p>
                    <TextInput
                        value={values.address}
                        name="address"
                        placeholder="Masukan Alamat Pengiriman"
                        onChange={_handleChange}
                        onBlur={_handleBlur}
                        hinterror={touched.address && errors.address}
                    />
                    <div className={classes.pengiriman}>
                        <p>Pilih Jasa Pengiriman</p>
                        <Select value={values.service} onChange={handleChangeService} options={options} className={classes.selectLayanan} />
                        {touched.service && errors.service && <p className={classes.error}>{errors.service}</p>}
                    </div>
                    <div className={classes.pengiriman}>
                        <p>Pilih Metode Pembayaran</p>
                        <Select className={classes.selectLayanan} value={values.method} options={optionsMetode} onChange={handleChangeMethod} />
                        {touched.method && errors.method && <p className={classes.error}>{errors.method}</p>}
                    </div>
                    <div className={classes.checkoutPanel} >
                        <h2 className={classes.h2checkout}>Ringkasan Belanja</h2>
                        <Row className={classes.priceDetails} align="center">
                            <Col span={16} align="left">
                                <p>Total Harga</p>
                                <p>Total Sayur</p>
                                <p>Total Ongkos Kirim</p>
                            </Col>
                            <Col span={8} align="right">
                                {dataCheckout.map((item) => (
                                    <>
                                        <p>{item.totalHarga}</p>
                                        <p>{item.totalProduct}</p>
                                        <p>{ongkos}</p>
                                    </>
                                ))}
                            </Col>
                        </Row>
                        <Row className={classes.totalPrice} align="center">
                            <Col span={16} align="left">
                                <p className={classes.overallPrice}>Total Tagihan</p>
                            </Col>
                            <Col span={8} align="right">
                                {dataCheckout.map((item) => (
                                    <p className={classes.overallPrice}>{this.formatRupiah(item.totalHarga + ongkos)}</p>
                                ))}

                            </Col>
                        </Row>
                        <div className={classes.wrapperButton} align="center">
                            <button className={classes.buttonPay} type="submit">Bayar</button>
                        </div>
                    </div>
                </form></>
        )
    }
    checkoutSchema = Yup.object().shape({
        address: Yup.string().required('Alamat harus diisi'),
        service: Yup.string().required('Jasa Pengiriman harus diisi'),
        method: Yup.string().required('Metode Pembayaran harus diisi'),
    })
    render() {
        const { classes } = this.props;
        const { data, address,
            service,
            method } = this.state;
        
    return(
        <PageBase>
            <div className={ classes.checkoutSection }>
                <Row justify='center'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className={ classes.checkoutCol } align="left">
                        <h2 className={classes.h2checkout}>Barang yang dibeli</h2>
                       
                        {data.map((item) => (
                            item.map((item) => (
                                item.map((item) => (
                                    <Row key={item.id} className={classes.priceDetails} align="center">
                                        <Col span={6} align="center">
                                            <img src={item.image} className={classes.imageRadius} alt="cardImage" width={"98%"} />
                                        </Col>
                                        <Col span={18} className={classes.descItems}>
                                            <p className={classes.titleItems}>{item.name}</p>
                                            <p className={classes.jumlahItems} >Jumlah : {item.quantity}</p>
                                            <p className={classes.jumlahItems} >Harga Satuan : {item.price}</p>
                                            <p className={classes.totalHargaItems}>Total Harga : {item.quantity * item.price}</p>
                                        </Col>
                                    </Row>
                                ))
                            ))
                        ))}
                
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={5} className={classes.checkoutCol} align="left">
                        <Formik
                            initialValues={{
                                address,
                                service,
                                method
                            }}
                            
                            validationSchema={this.checkoutSchema}
                            onSubmit={this.handleSubmit}
                            component={this.renderFormPengiriman}
                        />
                    </Col>
                </Row>
            </div>
        </PageBase>
    );
    }
}

