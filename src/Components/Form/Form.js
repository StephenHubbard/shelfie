import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';


export default class Form extends Component {
    constructor() {
        super()
    
        this.state = {
            product_id: '',
            name: '',
            image: '',
            price: '',
        }
    }

    resetInputs() {
        const box = document.getElementById("input-boxes")
        box.reset();
        this.setState(this.baseState);
    }

    addButton() {
        this.resetInputs()
        this.createProduct()
    }

    handleUrlChange(e) {
        this.setState({
            image: e.target.value
        })
        console.log(this.state.image)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
        console.log(this.state.price)
    }

    createProduct() {
        axios
            .post('/api/product', this.state)
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
        this.props.getNewProductsFn();
        console.log(this.state)    
    }

    render() {
        return (
            <div className="form-container">

                <div className="img-placeholder">

                </div>
                    <form id="input-boxes">
                        <h3>Image Url</h3>
                        <input
                            className="input"
                            type="text" 
                            placeholder="Image Url"
                            onChange={e => this.handleUrlChange(e)}
                            name='image'
                        />

                        <h3>Product Name</h3>
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Product Name"
                            onChange={e => this.handleNameChange(e)}
                            name='productName'
                        />

                        <h3>Price</h3>
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Price" 
                            onChange={e => this.handlePriceChange(e)}  
                            name='price'                  
                        />
                    </form>

                <button className="cancel" onClick={() => this.resetInputs()}>Cancel</button>
                <button className="add" onClick={(e) => this.addButton(e)}>Add</button>
                
            </div>
        )
    }
}