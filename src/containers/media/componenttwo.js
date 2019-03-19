import React from 'react';
import withHeader from './hoc.js';
 class Demo2 extends React.Component {
   render() {
     return (
       <div>
          我是组件2
       </div>
     )
   }
}
export default withHeader('dd',Demo2)