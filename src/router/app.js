import React from "react";
import Side from "components/layout/side.js"
import '../style/index.scss';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.objRef = React.createRef();
  }
  componentDidMount() {
   
  }
  render () {
    return (
      <div className="app-layout-wrap">
        <div ref={this.objRef} className="app-layout-header"></div>
        <div className="app-layout-content">
          <div className="app-layout-side">
            <Side />
          </div>
          <div className="app-layout-container">
             {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}