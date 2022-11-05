import React from 'react';
import PageBase from '../../components/layouts/PageBase';
import { Col, Row, Card } from 'antd';

export default class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <PageBase>
        <div className={ classes.aboutUsSection }>
          <div align="center">
            <Card className={ classes.aboutCard } style={{ width: "80%" }} >
              <Row justify="center" align="middle">
                <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/3kt6dSK/Pngtree-set-of-fruit-and-vegetable-7259018-1.png' height={"100%"} align="left"></img>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Tentang Kami</h2>
                  <p align="justify">Vegetara adalah singkatan dari "Vegetables Tarakan".Website ini menjadi platform sistem informasi dan marketplace hasil panen sayuran masyarakat di Kampung Enam Kota Tarakan, Kalimantan Utara.Platform ini diciptakan oleh tim innovilage dari Telkom University pada tahun 2022 dan akan terus dikembangkan pada tahun berikutnya.Innovilage sendiri adalah Progam kolaborasi yang diinisiasi antara PT Telkom Indonesia dan Telkom University.Program ini mewadahi mahasiswa untuk tetap produktif di tengah Pandemi Covid-19 dengan melakukan kegiatan sosial di desa yang membawa kebermanfaatan bagi masyarakat dan lingkungan sekitar.Untuk info lebih lanjut mengenai innovilage <strong><a href='https://innovillage.id/'>klik disini</a></strong>.</p>
                </Col>
              </Row>

              <Row justify="center" align="middle">
                <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Apa yang Kami Tawarkan?</h2>
                  <p align="justify">Website ini merupakan sistem informasi penjadwalan hasil panen dan sekaligus marketplace khusus jual beli sayur yang ada di kampung enam. Pembelian sayur ini bersifat pre order. silahkan melakukan pemesanan terlebih dahulu dan anda akan mendapatakan sayuran anda pada hari panen dilakukan </p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/gWHqnQt/Pngtree-set-of-fruit-and-vegetable-7259018-1-2.png' height={"100%"} align="right"></img>
                </Col>
              </Row>

              <Row justify="center" align="middle">
              <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/T8K5K2p/Pngtree-set-of-fruit-and-vegetable-7259018-1-1.png' height={"100%"} align="left"></img>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Target Pasar</h2>
                  <p align="justify">Tujuan dari marketplace ini tentunya membantu meningkatkan ekonomi para petani dan juga berupaya mendigitalisasi proses jual beli sehingga menjadi lebih mudah .</p>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </PageBase>
    );
  }
}

