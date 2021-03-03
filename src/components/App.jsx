
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import EditCategory from './editCategory';
import AddCategory from './addCategory';
import Home from './home';
import CategoriesList from './list';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ViewCategory from './viewCategory';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home />
          <Route path="/">
            <Redirect to="/list" />
          </Route>
          <Route path="/list" component={CategoriesList} />
          <Route path="/edit" component={EditCategory} />
          <Route path="/view" component={ViewCategory} />
          <Route path="/add" component={AddCategory} />
          <Switch>
          </Switch>
        </div>
      </Provider>);
  }
}

