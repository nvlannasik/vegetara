import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ButtonFilled extends React.Component{
  render() {
    const { classes, onClick, children, link } = this.props;
    return (
      <>{link ?
        <Link to={link} className={classes.buttonFilled}>{children}</Link> :
        <button onClick={onClick} className={classes.buttonFilled}>{children}</button>}
        
      </>
    );
  }
}

ButtonFilled.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ButtonFilled.defaultProps = {
  classes: {},
  onClick: () => { },
  children: '',
  link: '',
};