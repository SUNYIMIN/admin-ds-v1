

import React from 'react';
import Componentone from './componentone.js';
import Componenttwo from './componenttwo.js'

export default class App extends React.Component {
   render() {
     return (
       <div>
         <Componentone />
         <Componenttwo />
       </div>
     )
   }
}
