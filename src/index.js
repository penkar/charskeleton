import React from 'react';
import {render} from 'react-dom';

// import CharSkeleton from './js/CharSkeleton';
import Library from './js/library/Library';
const domelement:Element = document.getElementById('js-mount');
require('./index.scss')

if(domelement) {
  render(
    <Library />,
    // <CharSkeleton />,
    domelement
  )
}
