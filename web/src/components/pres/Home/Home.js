import React, { Component } from 'react';

import Helmet from 'react-helmet';

import { DayContainer } from '../../containers';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <h1>Hi</h1>
        <DayContainer />
      </div>
    );
  }
}
