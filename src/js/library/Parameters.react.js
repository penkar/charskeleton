import React from 'react';
type Props = {
  children:Element,
  title:String,
  jsonStructure:Object,
}

export default class Parameters extends React.Component<Props> {
  render() {
    return (
      <div className="Parameters">
        <div>Component: {this.props.title}</div>
        <hr/>
        { this.props.children }
        <hr/>
        
        <div>Example JSON:</div>
        <div>
          <pre>
            <code>
              { JSON.stringify(this.props.jsonStructure) }
            </code>
          </pre>
        </div>
      </div>
    );
  }
}