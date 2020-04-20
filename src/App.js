import React from 'react';
import Menu from './components/Menu';
import { DISHES } from './shared/dishes';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render(){
        return (
            <Menu dishes={this.state.dishes} />
    );
    }
}

export default App;