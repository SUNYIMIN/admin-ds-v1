import React from 'react';
export default function withHeader(title, WrappedComponent) {
  return class HOC extends React.Component {
    add() {
      alert(1)
    }
    render() {
      return <div>
        <div className="demo-header">
        {title}
        </div>
        <div onClick={this.add.bind(this)}>
         <WrappedComponent {...this.props}/> 
        </div>
      </div>
    }
  }
}