import React from "react";
import { FieldTimeOutlined } from "@ant-design/icons";
import { Col } from 'antd';

export default class Card extends React.Component {
  render() {
    const { classes, title, estimasi, owner, stock, price, image, onClick } = this.props;
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={4} className={classes.gridCard}>
        <button className={classes.buttonCard} onClick={onClick}>
        <div className={classes.card}>
            <div className= { classes.headerCard }>
              <div className={ classes.titleCard}><b>{title}</b></div>
              <div className= { classes.nameOwner}>
                <span className="nameOwnerText">{owner}</span>
              </div>
            </div>
            <div className="cardImage">
              <img src={image} alt="cardImage" width={20} height={20} />
            </div>
            <div className= { classes.cardContent }>
              <div className= { classes.estimasi }>
                <span className="iconEstimasi">
                  <FieldTimeOutlined />
                </span>
                <span className="estimasiText">
                  {" Akan tersedia dalam " + estimasi + " hari"}
                </span>
              </div>
              <div className={ classes.priceTag}>
                <span className={classes.priceText}>{price}</span>
                {/* <span className="stock">{stock}</span> */}
              </div>
            </div>
          </div>
        </button>
      </Col>
    );
  }
}