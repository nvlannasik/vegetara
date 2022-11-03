import React from "react";
import { Card } from "../../components/elements";
import PageBase from "../../components/layouts/PageBase";
import { IMAGES, ROUTES } from "../../configs";
import { Row } from "antd";
import axios from "axios";
import { API } from "../../configs";
import { get } from "lodash";
import moment from "moment";
import { Grid } from "@mui/material";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataProduct: [], expired: false };
  }

  componentDidMount() {
    this.handleGetAllProduct();
    
  }

  handleGetAllProduct = () => {
    axios.get(API.getAllProduct, { headers: API.header }).then((res) => {
      const data = get(res, "data.data.products");
      this.setState({ dataProduct: data });
      console.log(data);
    });
  };
  handleRouteLogin = () => {
    window.location.href = "/login";
  };

  handleRouteRegister = () => {
    window.location.href = "/register";
  };

  handleRouteCard = (id) => {
    window.location.href = ROUTES.CARD_PAGE(id);
    localStorage.setItem("idProduct", id);
    sessionStorage.setItem("path", window.location.pathname);
  };
  handleModalExpired = () => {
    this.setState({ isModalExpired: !this.state.isModalExpired });
  };

  handleEstimateTime = (date) => {
    var dateNow = moment().format("YYYY-MM-DD");
    var dateFuture = date
    console.log(moment(dateFuture).format("YYYY-MM-DD"), dateNow);
    if (moment(dateFuture).format("YYYY-MM-DD") > dateNow) {
      let diff = moment(dateFuture).diff(moment(dateNow), "days");
      return "tersedia dalam" + diff + " hari lagi";
    }
    if (moment(dateFuture).format("YYYY-MM-DD") < dateNow) {
      return "Sudah tidak tersedia";
    }
    if (moment(dateFuture).format("YYYY-MM-DD") === dateNow) {
      return "Tersedia";
    }
  };

  render() {
    const { classes } = this.props;
    const { dataProduct,  } = this.state;
    return (
      <PageBase>
        <div className={classes.landingPage}>
          <div>
            <img src={IMAGES.BANNER} alt="landingPage" />
          </div>

          <div className={classes.cardProduct}>
            <div className={classes.cardProductContent}>
              <h1 className={classes.titleProduct}>Produk</h1>
              <ul>
                  {dataProduct.map((item, index) => {
                    var dateNow = moment().format("YYYY-MM-DD");
                    var dateFuture = item.harvestDate
                    console.log(moment(dateFuture).format("YYYY-MM-DD"), dateNow);
                    return (
                      <li>
                      <Card
                        key={index}
                        title={item.name}
                        estimasi={this.handleEstimateTime(item.harvestDate)}
                        owner={item.petaniName}
                        stock={item.stock}
                        price={item.price}
                        image={item.imageUrl}
                        onClick={this.handleRouteCard.bind(this, item._id)}
                        expired={moment(dateFuture).format("YYYY-MM-DD") < dateNow}
                      />
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </PageBase>
    );
  }
}
