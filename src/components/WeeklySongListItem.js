import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WeeklySongListItem.css';

class WeeklySongListItem extends Component {
  render() {
    const { order, title, singer, viewCount } = this.props;
    return <div className="WeeklySongListItem">
      <div className="order">{order}</div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="singer">{singer}</p>
      </div>
      <div className="view-count">{viewCount.toLocaleString()}</div>
    </div>
  }
}

WeeklySongListItem.defaultProps = {
  viewCount: 0
};

WeeklySongListItem.propTypes = {
  order: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  /** View count */
  viewCount: PropTypes.number
};

export default WeeklySongListItem;
