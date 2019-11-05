import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super()
    
        this.state = {
            products: [],
        }
        
        this.getNewProducts = this.getNewProducts.bind(this)
    }

    componentDidMount(){
        axios.get('/api/inventory').then(res=> {
        this.setState({
            products: res.data
        })
        })
    }

    getNewProducts() {
        axios
        .get('/api/inventory')
        .then(res => {
            this.setState({
            products: res.data
            })
        })
        console.log("new products")
    }



    deleteProduct(id) {
        axios   
            .delete(`api/inventory/${id}`)
            .then(res => {
                
            })
            .catch(err => console.log(err))
    }

    render() {
        let key = 0;
        
        return (
            <div>
                {this.state.products.map(el => (
                    <Product 
                    productObj={el} key={key++}
                    deleteProductFn={this.deleteProduct}
                    getNewProductsFn={this.getNewProducts}

                    />
                ))}
            </div>
        )
    }
}