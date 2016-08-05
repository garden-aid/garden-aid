import React from 'react';

import Helmet from 'react-helmet';

import { DayContainer } from '../../containers';

import styles from './Home.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Helmet title="Home" />
      <h1>Hi</h1>
      <DayContainer />
    </div>
  );
}
