/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import Home from './components/Home';
import PizzaUpload from './components/Pizza-upload';
import SauceUpload from './components/Sauce-upload';
import Pizza from './components/Add-new-pizza';
import Sauce from './components/Add-new-sauce';
import Remove from './components/Remove';
import Messages from './components/Messages';
import Archive from './components/OrderArchive';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.PIZZAUPLOAD} component={PizzaUpload} />
        <Route path={routes.SAUCEUPLOAD} component={SauceUpload} />
        <Route path={routes.PIZZA} component={Pizza} />
        <Route path={routes.SAUCE} component={Sauce} />
        <Route path={routes.REMOVE} component={Remove} />
        <Route path={routes.MESSAGES} component={Messages} />
        <Route path={routes.ARCHIVE} component={Archive} />
        <Route exact path={routes.HOME} component={Home} />
      </Switch>
    </App>
  );
}
