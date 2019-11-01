import React, {Component} from 'react';
import Product from '../Product/Product';


export default class Dashboard extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        let key = 0;
        
        return (
            <div>
                {this.props.products.map(el => (
                    <Product 
                    productObj={el} key={key++}
                    />
                ))}
            </div>
        )
    }
}