import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./core/Home";
import MovieDetail from "./core/MovieDetail";
import OAuth2RedirectHandler from './user/oauth2/OAuth2RedirectHandler'
import Login from './user/login/Login';
import { Modal } from 'semantic-ui-react';
import Movies from './core/Movies';
import Profile from './core/Profile';
import ChangePassword from './core/ChangePassword';
import UserManage from './core/UserManage';
import MovieManage from './core/MovieManage';

import PrivateRoute from './user/PrivateRoute';




// import module.

// ipmort css.
import './App.css'
// import admin module.

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
        <Route path="/movie/:movieId" component={MovieDetail}></Route>
        <Route path="/movies" component={Movies}></Route>

        <PrivateRoute path="/user/dashboard/profile" exact component={Profile} />
        <PrivateRoute path="/user/dashboard/changepassword" exact component={ChangePassword} />
        <PrivateRoute path="/admin/user" exact component={UserManage} />
        <PrivateRoute path="/admin/movie" exact component={MovieManage} />

        {/* <PrivateRoute path="/user/dashboard/history" exact component={UserDashboardHistory} />
        <AdminRoute path="/admin/dashboard/product/create" exact component={AdminProductCreate}/>
        <Route exact path="/noAccess" component={NoAccess} />
        <Route path='*' component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
