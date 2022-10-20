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
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/3kt6dSK/Pngtree-set-of-fruit-and-vegetable-7259018-1.png'></img>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Tentang Kami</h2>
                  <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
              </Row>

              <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Apa yang Kami Tawarkan?</h2>
                  <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/gWHqnQt/Pngtree-set-of-fruit-and-vegetable-7259018-1-2.png'></img>
                </Col>
              </Row>

              <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <img src='https://i.ibb.co/T8K5K2p/Pngtree-set-of-fruit-and-vegetable-7259018-1-1.png'></img>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                  <h2 className={classes.headerAboutUs} align="left" >Target Pasar</h2>
                  <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
      </PageBase>
    );
  }
}

