import React from "react";
import { Container } from "react-bootstrap";
//import classes from "./Layout.css";

{
  /*const layout = props => (
  <Aux>
    {" "}
    {/* used to make a wrapping root element, for using jsx in a js file 
    <nav>
      <ul className="Navbar">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/create-recipe">Create Recipe</a>
        </li>
        <li>
          <a href="/browse-recipe">Browse Recipes</a>
        </li>
        <li>
          <a href="/sign-out">Sign out</a>
        </li>
      </ul>
    </nav>
    <main className={classes.Spacing}>{props.children}</main>
  </Aux>
);

export default layout;
*/
}

export const Layout = props => <Container>{props.children}</Container>;
