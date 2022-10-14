import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: false
    };

    this.input = React.createRef();
  }

  _handleMouseDown = (event) => {
    event.preventDefault();
    const { eye } = this.state;
    this.setState({ eye: !eye });
    this.input.current.focus();
    setTimeout(() => {
      this.input.current.selectionStart = this.input.current.value.length;
      this.input.current.selectionEnd = this.input.current.value.length;
    }, 10);
  }

  _renderInput = (type) => {
    const { props } = this;
    const { eye } = this.state;

    switch (type) {
      case 'password':
        return (
          <div className={props.isHalf ? 'input-wrapper password' : 'input-wrapper'}>
            <input
              {...props}
              ref={this.input}
              type={eye ? 'text' : 'password'}
            />
            <button
              onMouseDown={this._handleMouseDown}
              type="button"
            >
              {eye ? (
                <VisibilityIcon fontSize="inherit" />
              ) : (
                  <VisibilityOffIcon fontSize="inherit" />
              )}
            </button>
          </div>
        );
      default:
        return (
          <div className="input-wrapper">
            <input
              {...props}
            />
          </div>
        );
    }
  }
  render() {
    const {
      classes,
      type,
      label,
      hint,
      hinterror,
      hasFocus,
      hintfocus,
      focused,
      name,
      hasBold
    } = this.props;
    const isFocused = name === focused;

    return (
      <div className={clsx(classes.formWrapper, {
        'error': hinterror,
        'hasFocus': hasFocus,
        'hasBold': hasBold
      })}>
        <p className="subtitle-1">{label}</p>
        {this._renderInput(type)}
        {(isFocused || hinterror || hint) && (
          <p className="overline-1 hint">
            {hinterror || hintfocus || hint}
          </p>
        )}
      </div>
    );
  }
}

TextInput.propTypes = {
  isHalf: PropTypes.bool,
  name: PropTypes.string,
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  hinterror: PropTypes.string,
  hasFocus: PropTypes.bool,
  hintfocus: PropTypes.string,
  focused: PropTypes.string,
  hasBold: PropTypes.bool
};

TextInput.defaultProps = {
  isHalf: false,
  name: '',
  type: '',
  label: '',
  hint: '',
  hinterror: '',
  hasFocus: true,
  hintfocus: '',
  focused: '',
  hasBold: false
};

export default TextInput;
