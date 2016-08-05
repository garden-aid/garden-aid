
import React, { Component, PropTypes } from 'react';

import Helmet from 'react-helmet';

import config from 'app-config';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  static contextTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div className={styles.app_content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
