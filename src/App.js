import React, { Component } from "react";
import Landing from "./containers/landing/landing";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import RecipeCreate from "./containers/recipe-create/RecipeCreate";
import { BrowseRecipes } from "./containers/recipe-create/BrowseRecipes";
import { NavigationBar } from "./components/Navigationbar";
import { Jumbotron } from "./components/Jumbotron";

// why you do this alan -_-

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
          <div>
            <NavigationBar />
            <Jumbotron />
            <Layout>
              <Switch>
                <Route path="/create-recipe" component={RecipeCreate} />
                <Route path="/browse-recipe" component={BrowseRecipes} />
                <Route path="/sign-out" render={() => <h1>sign-out</h1>} />
              </Switch>
            </Layout>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
