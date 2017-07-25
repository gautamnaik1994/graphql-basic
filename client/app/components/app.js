import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../style/app.scss';
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

const App = ({ match }) => (
  <div>
    <nav>
      <div className="nav-wrapper row clearfix">
        <div className="container ">
          <a href="#" className="brand-logo">Logo</a>
        </div>
      </div>
    </nav>
    <div className="container">
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path={`${match.url}songs/new`} component={SongCreate} />
        <Route path={`${match.url}songs/:id`} component={SongDetail} />
        {/* <Route exact path="/" component={LandingPage} />
                        <Route path={`${match.url}signin`} component={SignIn} />
                        <Route path={`${match.url}signup`} component={SignUp} />
                        <Route path={`${match.url}signout`} component={Signout} />
                        <Route path={`${match.url}protected`} component={RequireAuth(Protected)} />*/}
      </Switch>
    </div>
  </div>
);
export default App;
