import React from "react";
import { FieldTimeOutlined } from "@ant-design/icons";

export default class Card extends React.Component {
  render() {
    const { classes, title, estimasi, owner, stock, price, image, onClick } = this.props;
    return (
      <button onClick={onClick}>
      <div className={classes.card}>
          <div className="cardTitle">{title}</div>
          <div className="cardImage">
            <img src={image} alt="cardImage" width={20} height={20} />
          </div>
          <div className="cardContent">
            <div className="estimasi">
              <span className="iconEstimasi">
                <FieldTimeOutlined />
              </span>
              <span className="estimasiText">
                {"Akan tersedia dalam" + estimasi + "hari"}
              </span>
            </div>
            <div className="nameOwner">
              <span className="nameOwnerText">{owner}</span>
            </div>
            <div className="price">
              <span className="priceText">{price}</span>
              <span className="stock">{stock}</span>
            </div>
          </div>
        </div>
      </button>
    );
  }
}
