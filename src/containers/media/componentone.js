
import React from 'react';
import withHeader from './hoc.js';

 class Demo1 extends React.Component {
   render() {
     return (
       <div>
          我是组件1
       </div>
     )
   }
}
export default withHeader('hh',Demo1)
