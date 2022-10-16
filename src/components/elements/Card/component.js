import React from 'react';
import * as icons from '@ant-design/icons';
import { Col } from 'antd';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      classes, title, estimasi, owner, price, image, onClick, 
    } = this.props;
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={4} className={classes.gridCard}>
        <button className={classes.buttonCard} onClick={onClick}>
          <div className={classes.card}>
            <div className={classes.headerCard}>
              <div className={classes.titleCard}><b>{title}</b></div>
              <div className={classes.nameOwner}>
                <span className="nameOwnerText">{owner}</span>
              </div>
            </div>
            <div className="cardImage">
              <img src={image} alt="cardImage" width={20} height={20} />
            </div>
            <div className={classes.cardContent}>
              <div className={classes.estimasi}>
                <span className="iconEstimasi">
                  <icons.FieldTimeOutlined />
                </span>
                <span className="estimasiText">
                  {`Akan tersedia dalam ${estimasi} hari`}
                </span>
              </div>
              <div className={classes.priceTag}>
                <span className={classes.priceText}>{price}</span>
              </div>
            </div>
          </div>
        </button>
      </Col>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  estimasi: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  classes: {},
  title: '',
  estimasi: 0,
  owner: '',
  stock: 0,
  price: '',
  image: '',
  onClick: () => { },
};
