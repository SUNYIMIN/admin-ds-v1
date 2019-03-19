import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './app.js';
import Cs from './container-map.js';
import Home from 'containers/home/index.js'
const router = (
   <Route path="/" component={App}>
     <IndexRoute component={Home} />
     <Route path="account" getComponent={Cs.Account} />
     <Route path="media" getComponent={Cs.Media} />
   </Route>
)

export default router;