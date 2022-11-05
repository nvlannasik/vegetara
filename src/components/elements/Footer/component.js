import React from "react";
import { IMAGES } from "../../../configs";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.footer}>
          <ul>
            <li className="footerBodyItem">
              <div className="logo">
                <img src={IMAGES.BUMN} alt="logo" width={200} />
              </div>
            </li>
            <li className="footerBodyCenter">
              <div className="logo">
                <img src={IMAGES.INNO} alt="logo" width={130} />
                <img src={IMAGES.TELU} alt="logo" width={130} />
              </div>
              <div className="address">
                <p>
                  <b>Kalimatan Utara, Kota Tarakan,</b> Kampung Enam
                </p>
                <hr />
              </div>
            </li>
            <li className="footerBodyItem">
              <div className="logo">
                <img src={IMAGES.PTTELKOM} alt="logo" width={200} />
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.CopyRight}>
          <p>© 2022 Tim Developer Merah Universitas Telkom.</p>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
