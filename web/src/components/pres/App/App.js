
import React, { Component, PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'app-config';

import styles from './App.scss';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
