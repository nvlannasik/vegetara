import React from 'react';
import { ButtonFilled, ButtonGhost } from '../../components/elements';
import PageBase from '../../components/layouts/PageBase';
import { IMAGES, ROUTES } from '../../configs';

export default class LandingPage extends React.Component{

  handleRouteLogin = () => {
    window.location.href = '/login';
  }

  handleRouteRegister = () => {
    window.location.href = '/register';
  }
  render() {
  const { classes } = this.props;
  return(
    <PageBase>
      <div className={classes.landingPage}>
        <div className="landingPageContent">
          <ButtonFilled className="btn-login"  link={ROUTES.LOGIN()}>Login</ButtonFilled>
          <ButtonGhost className="btn-register" link={ROUTES.REGISTER()}>Register</ButtonGhost>
        </div>
        <div>
          <img src={IMAGES.BANNER} alt="landingPage" />
        </div>
      </div>
    </PageBase>
  );
}
}
