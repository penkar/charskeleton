//@flow
import React from 'react';

import Components from '../lib/index.js';

type Props = {}
export default class ShowCase extends React.Component<Props> {
  render() {
    return (
      <div className="ShowCase">
        { charInfo.map((category, i) =>
          React.createElement(Components[category.maptype], {...category, key:i})) }
      </div>
    );
  }
}
