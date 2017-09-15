import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from '../components/Home';
import PostNew from '../components/PostNew';
import PostShow from '../components/PostShow';

class App extends Component {

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css" />
        <BrowserRouter>
          <div>
              <Switch>
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostShow} />
                <Route path="/" component={Home} />
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
