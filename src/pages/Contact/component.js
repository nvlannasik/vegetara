import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { Row,Col,Select } from 'antd';
import { ButtonFilled, TextInput, Footer } from '../../components/elements';

export default class Contact extends React.Component{
    render() {
        const { classes } = this.props;
        
    return(
        <PageBase>
            <div className={ classes.contactSection }>
                <Row justify='center' align='middle'>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6} className={ classes.contactCol } align="left">
                        <img src='https://i.ibb.co/cgHP9gs/Pngtree-fruit-and-vegetable-in-cartoon-7427337.png' width={"100%"}></img>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={10} xxl={10} className={ classes.contactCol } align="left">
                        <div className={ classes.contactPanel} >
                          <h2><b>Kontak Kami</b></h2>
                          <TextInput
                            name="Nama Lengkap"
                            label="Nama Lengkap"
                          />
                          <TextInput
                            name="Email"
                            label="Email"
                          />
                          <label className={classes.labelArea}>Pesan</label>
                          <br></br>
                          <textarea className={classes.textAreaInput}></textarea>
                            <div className={ classes.wrapperButton } align="right">
                                <button className={classes.buttonPay}>Kirim</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageBase>
    );
    }
}