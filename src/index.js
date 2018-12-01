import React from 'react';
import {render} from 'react-dom';

import CharSkeleton from './js/CharSkeleton';
const domelement = document.getElementById('js-mount');

if(domelement) {
  render(<CharSkeleton />, domelement);
}
