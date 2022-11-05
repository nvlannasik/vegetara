import React from "react";

import {  ButtonFilled, ButtonGhost} from "../../elements";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTES, API } from "../../../configs";
import { Link } from "react-router-dom";
import { getUserSession } from "../../../utils/commons";
import { SwipeableDrawer, Divider, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import Call from "@mui/icons-material/Call";
import { Footer, ModalExpired } from "../../elements";
import InfoIcon from "@mui/icons-material/Info";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Badge from "@material-ui/core/Badge";
import propTypes from "prop-types";
import axios from "axios";
import LogoutIcon from "@mui/icons-material/Logout";
import { Login } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import clsx from "clsx";


export default class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      name: "",
      token: "",
      tokenExpired:false
    };
  }

  async componentDidMount() {
    const user = getUserSession();
    const { name, accessToken} = user;
    this.setState({ name});
    this.handleCheckRoute(accessToken);
    if(window.location.pathname !== "/checkout") {
      sessionStorage.removeItem('dataCheckout')
    }
  }

  handleClick = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleCheckToken = (accessToken) => {
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": accessToken,
    };
    axios.get(API.checkTokenUser, { headers })
      .catch((err) => {
        this.setState({ tokenExpired: true });
        localStorage.clear();
      });
  };

  handleCheckRoute = (token) => {
    const { pathname } = window.location;
    const user = getUserSession();
    const { role } = user;
    if (role === "admin" || role === "petani") {
      localStorage.clear();
      window.location.href = ROUTES.LOGIN();
    } else {
      // eslint-disable-next-line default-case
      switch (pathname) {
        case ROUTES.CHART():
          this.handleCheckToken(token);
          break;
        case ROUTES.CHECKOUT():
          this.handleCheckToken(token);
          break;
        case ROUTES.PROFILE():
          this.handleCheckToken(token);
          break;
        
      }
    }
  };

  handleLogout = () => {
    localStorage.clear();
    window.location.href = ROUTES.LOGIN();
  };

  handleOpenCloseModal = () => {
    this.setState({ tokenExpired: !this.state.tokenExpired }, () => {
      window.location.href = ROUTES.LOGIN();
    });
  };

  _renderModalExpired() {
    const { tokenExpired } = this.state;
    return (
      <ModalExpired
        open={tokenExpired} handleClose={this.handleOpenCloseModal} message="Silahkan Login ulang"   />
    )
  }
  _renderDrawer() {
    const { classes } = this.props;
    const { sidebarOpen, name } = this.state;
    return (
      <SwipeableDrawer
        open={sidebarOpen}
        onClose={this.handleClick}
        onOpen={this.handleClick}
        className={classes.drawer}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleClick}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {name ?  (<ListItem button key="Profile" onClick={() => { window.location.href = ROUTES.PROFILE() }}>
            <ListItemIcon>
              < AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profil Saya" />
          </ListItem>): null}
          <ListItem button key="Home" onClick={() => {window.location.href = ROUTES.LANDING_PAGE()}}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Beranda" />
          </ListItem>
          <ListItem button key="About" onClick={() => { window.location.href = ROUTES.ABOUT() }}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Tentang Kami" />
          </ListItem>
          <ListItem button key="Contact" onClick={() => { window.location.href = ROUTES.CONTACT() }}>
            <ListItemIcon>
              <Call />
            </ListItemIcon>
            <ListItemText primary="Kontak" />
          </ListItem>
          {name ? (<ListItem button key="Logout" onClick={() => { this.handleLogout() }}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Keluar" />
          </ListItem>) : (<ListItem button key="Login" onClick={() => { this.handleLogout() }}>
            <ListItemIcon>
                <Login />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>)}
        </List>
      </SwipeableDrawer>
    );
  }

  // _renderSidebar() {
  //   const { classes } = this.props;
  //   const { sidebarOpen } = this.state;
  //   return (
  //     <div
  //       className={clsx({
  //         [classes.sidebarHide]: sidebarOpen === false,
  //         [classes.sidebarShow]: sidebarOpen === true,
  //       })}
  //     >
  //       <div className="sidebar">
  //         <div className="sidebarBody">
  //           <div className="sidebarBodyItem">
  //             <Link to={ROUTES.LANDING_PAGE()}>
  //               <h1>Home</h1>
  //             </Link>
  //           </div>
  //           <div className="sidebarBodyItem">
  //             <Link to={ROUTES.LANDING_PAGE()}>
  //               <h1>Kontak Kami</h1>
  //             </Link>
  //           </div>
  //           <div className="sidebarBodyItem">
  //             <Link to={ROUTES.LANDING_PAGE()}>
  //               <h1>Kontak Kami</h1>
  //             </Link>
  //           </div>
  //           <div className="sidebarBodyItem">
  //             <Link to={ROUTES.LANDING_PAGE()}>
  //               <h1>dafar</h1>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  _renderRightElement() {
    return (
      <div className="rightElement">
        <div className="searchBar">{this.renderButton()}</div>
        <div className="menuIcon">
          <MenuIcon onClick={this.handleClick} />
        </div>
      </div>
    );
  }
  _renderAkun() {
    const { name } = this.state;
    const { badge } = this.props;
    return (
      <div className="rightElement">
        <div className="trolli">
          <Link to={ROUTES.CHART()}>
            <Badge badgeContent={badge} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </Link>
        </div>
        
        <div className="avatar">
            <Link className="avatarImage" to={ROUTES.PROFILE()}>
              <h2>{name[0].toUpperCase()}</h2>
            </Link>
          <Link className="username" to={ROUTES.PROFILE()}>
              <h2>{name}</h2>
            </Link>
          <div className="menuIcon">
            <MenuIcon onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
  renderButton = () => {
    return (
      <>
        <ButtonFilled className="btn-login" link={ROUTES.LOGIN()}>
          Login
        </ButtonFilled>
        <ButtonGhost className="btn-register" link={ROUTES.REGISTER()}>
          Register
        </ButtonGhost>
      </>
    );
  };

  _renderAppBar() {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <div className="navbar">
        <CssBaseline />
        <div className={classes.appBar}>
          <div className="logo">
            <h1>Vegetara</h1>
          </div>
          <div className="menu">
            <div className="menuItem">
              <ul>
                <li>
                  <Link to={ROUTES.LANDING_PAGE()} className={classes.link}>
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.ABOUT()}>Tentang Kami</Link>
                </li>
                <li>
                  <Link to={ROUTES.CONTACT()}>Kontak</Link>
                </li>
              </ul>
            </div>
          </div>
          {name ? this._renderAkun() : this._renderRightElement()}
        </div>
      </div>
    );
  }

  render() {
    const { children, classes } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div
        className={clsx(classes.container, {
          [classes.main]: sidebarOpen === true,
        })}
      >
        {this._renderAppBar()}
        {this._renderDrawer()}
        {this._renderModalExpired()}
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
}

PageBase.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
  badge: propTypes.number,
};

PageBase.defaultProps = {
  badge: 0,
};
