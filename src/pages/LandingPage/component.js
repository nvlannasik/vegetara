import React from "react";
import { Card, ModalBanner, ModalConfirm } from "../../components/elements";
import PageBase from "../../components/layouts/PageBase";
import { IMAGES, ROUTES } from "../../configs";
import axios from "axios";
import { API } from "../../configs";
import { get } from "lodash";
import moment from "moment";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataProduct: [], expired: false, modalBanner: false, ModalConfirm:true };

  }

  componentDidMount() {
    this.handleGetAllProduct();
    let banner = sessionStorage.getItem("banner");
    if (!banner) {
      this.setState({ modalBanner: true });
    }else{
      this.setState({ modalBanner: false });
    }
  }
  renderModalConfrim = () => {
    const { ModalConfirm } = this.state;
    return (
      <ModalConfirm
        title="succes"
        description="anda yakin?"
        open={ModalConfirm}
        handleClose={this.handleCloseModalConfirm}
        getData={this.handleGetAllProduct}
      />
    )
  }

  handleCloseModalBanner = () => {
    this.setState({ modalBanner: false }, () => {
      sessionStorage.setItem("banner", true);
    });
  }
  renderModalBanner = () => {
    const { modalBanner } = this.state;
    return (
      <ModalBanner
        visible={modalBanner} onClose={this.handleCloseModalBanner}/>
    )
  }
  handleGetAllProduct = () => {
    axios.get(API.getAllProduct, { headers: API.header }).then((res) => {
      const data = get(res, "data.data.products");
      const dataProduct = data.sort((a, b) =>
        a.timestamps < b.timestamps ? 1 : -1
      );
      this.setState({ dataProduct });
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
    var dateFuture = date;
    if (moment(dateFuture).format("YYYY-MM-DD") > dateNow) {
      let diff = moment(dateFuture).diff(moment(dateNow), "days");
      return diff + " hari lagi";
    }
    if (moment(dateFuture).format("YYYY-MM-DD") < dateNow) {
      return "tidak tersedia";
    }
    if (moment(dateFuture).format("YYYY-MM-DD") === dateNow) {
      return "Tersedia";
    }
  };

  render() {
    const { classes } = this.props;
    const { dataProduct } = this.state;
    return (
      <PageBase>
        <div className={classes.landingPage}>
          <div>
            <img src={IMAGES.BANNER} alt="landingPage" />
          </div>
          {/* {this.renderModalConfrim()} */}
          <div className={classes.cardProduct}>
            <div className={classes.cardProductContent}>
              <h1 className={classes.titleProduct}>Produk</h1>
              <ul>
                {dataProduct.map((item, index) => {
                  var dateNow = moment().format("YYYY-MM-DD");
                  var dateFuture = item.harvestDate;
                  return (
                    <li>
                      <Card
                        key={index}
                        title={item.name}
                        estimasi={this.handleEstimateTime(item.harvestDate)}
                        owner={item.petaniName}
                        satuan={item.satuanJenis}
                        stock={item.stock}
                        price={item.price}
                        image={item.imageUrl}
                        onClick={this.handleRouteCard.bind(this, item._id)}
                        expired={
                          moment(dateFuture).format("YYYY-MM-DD") < dateNow
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        {this.renderModalBanner()}
      </PageBase>
    );
  }
}
