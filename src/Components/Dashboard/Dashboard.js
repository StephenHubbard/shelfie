import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super()

    this.deleteProduct = this.deleteProduct.bind(this)

    }



    deleteProduct(id) {
        axios   
            .delete(`api/inventory/${id}`)
            .then(res => {
                this.props.getNewProductsFn();
            })
            .catch(err => console.log(err))
    }

    render() {
        let key = 0;
        
        return (
            <div>
                {this.props.products.map(el => (
                    <Product 
                    productObj={el} key={key++}
                    deleteProductFn={this.deleteProduct}
                    />
                ))}
            </div>
        )
    }
}