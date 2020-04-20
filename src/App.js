import React from 'react';
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';
import DishDetail from './components/DishdetailComponent'
import {Navbar, NavbarBrand} from 'reactstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDishID: null
        };
    }

    onDishSelect(ID){
        this.setState({selectedDishID: ID})
    }

    render(){
        return (
            <div className="App">
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishID)[0]} />      </div>
        );
    }
}

export default App;