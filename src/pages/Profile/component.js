import react from "react";
import PageBase from "../../components/layouts/PageBase";
import { getUserSession } from "../../utils/commons";
import { Card, ButtonFilled } from "../../components/elements";
import { ROUTES } from '../../configs'

export default class Profile extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:''
    };
  }

  componentDidMount() {
    this.handlegetProfile();
  }

  handlegetProfile = () => {
    const user = getUserSession();
    const { name } = user;
    this.setState({ name });
  };

  handleLogout = () => {
    localStorage.clear();
    window.location.href = ROUTES.LOGIN();
  };

  render() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <PageBase>
        <div className={classes.cover}></div>
        <div className={classes.container}>
          <div>
            <div className={classes.avatar}>
              {name.charAt(0).toUpperCase()}
            </div>
            <h2 className={classes.name}>{name}</h2>
          </div>
          
        </div>
        <div className={classes.history}>
          <h2>Riwayat Transaksi</h2>
          <Card
            title={"sayus kacang"}
            estimasi={"Kadaluarsa"}
            owner={"Imbron"}
            price={"konfirmasi pesanan"}
            image={"https://i.ibb.co/pb001rX/istockphoto-174429248-170667a-1.png"}
            onClick={this.handleRouteCard}
          />
          <ButtonFilled onClick={() => { this.handleLogout()}}>Logout</ButtonFilled>
        </div>
      </PageBase>
    );
  }
}
