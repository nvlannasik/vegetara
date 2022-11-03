import React from 'react';
import * as icons from '@ant-design/icons';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import clsx from 'clsx';

export default class Card extends React.Component {
  render() {
    const {
      classes, title, estimasi, owner, price, image, onClick, expired
    } = this.props;
    return (
        <button className={classes.buttonCard} onClick={onClick}>
          <div className={classes.card}>
            <div className={classes.headerCard}>
            <div className={classes.titleCard}><b><Dotdotdot clamp={1}>{title}</Dotdotdot></b></div>
            </div>
            <div className="cardImage">
              <img src={image} alt="cardImage" />
            </div>
            
            <div className={classes.cardContent}>
              <div className={classes.estimasi}>
                <span className="iconEstimasi">
                  <icons.FieldTimeOutlined />
                </span>
                <span className="estimasiText">
                  {estimasi}
                </span>
              </div>
            <div className={classes.priceTag}>
              <span className={clsx(classes.priceText, { [classes.expired]: expired === true, })}>{price}</span>
              </div>
            </div>
            <div className={classes.nameOwner}>
              <span className="nameOwnerText">{owner}</span>
            </div>
          </div>
        </button>
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
  expired: PropTypes.bool.isRequired,
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
  expired: false,
};
