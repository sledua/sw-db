import React, {Component} from "react";
import {Switch, Route}  from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Auth from "./conteiner/Auth/Auth";
import About from "./conteiner/About/About";
import Register from "./conteiner/Register/Register";
import Dashboard from "./conteiner/Dashboard/Dashboard";

class App extends Component {
  render() {
      return (
          <Layout>
              <Switch>
                  <Route path="/" component={Auth} exact/>
                  <Route path="/register" component={Register}/>
                  <Route path="/about" component={About}/>
                  <Route path="/dashboard" component={Dashboard}/>
              </Switch>
          </Layout>

      )
  }
}

export default App;

//TODO Сверстать логин формы
//TODO Добавить валидацию
//TODO send to Sanya
