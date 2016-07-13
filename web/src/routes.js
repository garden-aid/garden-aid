import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    Home,
    NotFound,
  } from 'containers';

export default (store) => { // eslint-disable-line no-unused-vars
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
