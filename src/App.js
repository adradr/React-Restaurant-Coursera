import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  } 

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
        {/* <DishDetail/> */}
      </div>
    );
  }
}

export default App;
