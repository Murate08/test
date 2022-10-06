import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import DataList from './pages/DataList';
import DataForm from './pages/DataForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/data-list" component={DataList} />
      <Route path="/add-data" component={DataForm} />
    </BrowserRouter>
  );
}

export default Routes;