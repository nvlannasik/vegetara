import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '@mui/icons-material/Search';

export default class SearchBar extends React.Component{

  _handleClickIcon = () => {
    const { onViewAll, keyword } = this.props;
    if (keyword && keyword.length !== 0) {
      onViewAll();
    }
  }

  render() {
    const { classes, value, onChange, keyword, setKeyword } = this.props;
    return(
        <div className={classes.inputWrapper}>
          <input
            onChange={setKeyword.bind(this)}
            placeholder="Cari Sayur"
            type="text"
            value={keyword}
            onKeyDown={this._handleKeyDown}
        />
        <div className='buttonWrapper'>
          <SearchIcon onClick={this._handleClickIcon} />
        </div>
        </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  keyword: PropTypes.string,
  setKeyword: PropTypes.func,
  onViewAll: PropTypes.func,
};

SearchBar.defaultProps = {
  keyword: '',
  setKeyword: () => { },
  onViewAll: () => { },
};


