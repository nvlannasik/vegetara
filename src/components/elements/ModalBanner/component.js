import react from "react";
import { Modal } from "antd";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";
import { IMAGES } from "../../../configs";

export default class ModalBanner extends react.Component {
  render() {
    const { visible, onClose, classes, width } = this.props;
    return (
      <Modal
        width={width}
        visible={visible}
        onCancel={onClose}
        closable
        destroyOnClose
        className={classes.modalPlain}
        closeIcon={<CancelIcon />}
        centered
        zIndex={1300}
        footer={false}
        maskClosable={false}
      >
        <div className={classes.body}>
          <div className="left">
            <div className="logo">
              <img src={IMAGES.LOGO_BUMN_NEW} alt="banner" className="bumn" />
              <img src={IMAGES.LOGO_INNO_NEW} alt="banner" className="inno" />
              <img src={IMAGES.LOGO_TELU_NEW} alt="banner" className="telu" />
              <img src={IMAGES.LOGO_TELU_NEW} alt="banner" className="pttelkom" />
            </div>
            <div className="title">
              <h1>Empowering Young Sociopreneur</h1>
              <p>for National Development</p>
              <img src={IMAGES.DIGITAL} alt="logo" className="digital" />
            </div>
          </div>
          <div className="right">
            <img src={IMAGES.ILUSTRASI} alt="logo" />
          </div>
        </div>
      </Modal>
    );
  }
}

ModalBanner.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  width: PropTypes.number,
};

ModalBanner.defaultProps = {
  visible: false,
  onClose: () => {},
  classes: {},
  width: "0 !important",
};
