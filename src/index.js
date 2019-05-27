// @flow
import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import store from './js/reducers/index.js';
require('./index.scss');

// import CharSkeleton from './js/CharSkeleton';
import Library from './js/library/Library';

const domelement:Element = document.getElementById('js-mount');
const applicationStore = createStore(store);

if(domelement) {
  render(
    <Provider store={applicationStore}>
      <Library />
      {/*<CharSkeleton />*/}
    </Provider>,
    domelement
  )
}
