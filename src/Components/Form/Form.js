import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: '',
            name: '',
            image: 'https://epaper.thesangaiexpress.com/images/not_found.png',
            price: '',
            show: true,
        }
    }

    componentDidMount() {
        if (this.state.id) {
            axios
                .get(`api/inventory/${this.state.id}`)
                .then(res => {
                    let {id, name, image, price} = res.data[0]
                    this.setState({
                        id: id, 
                        name: name, 
                        image: image, 
                        price: price, 
                        show: false
                    })
                })
                .catch(err => console.log(err))
        }
    }

    saveChanges() {
        axios
            .put(`/api/inventory/${this.state.id}`, this.state)
            .then(() => this.props.history.push("/api/inventory"))
            .catch(err => console.log(err))
    }


    resetInputs() {
        const box = document.getElementById("input-boxes")
        box.reset();
        this.setState(this.baseState);
        this.setState({
            image: 'https://epaper.thesangaiexpress.com/images/not_found.png'
        })
    }

    addButton() {
        this.resetInputs()
        this.createProduct()
    }

    handleUrlChange(e) {
        this.setState({
            image: e.target.value
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    createProduct() {
        axios
            .post('/api/inventory', this.state)
            .then(res => {
                this.setState({
                    products: res.data 
                })
            })
        // this.props.getNewProductsFn();
    }

    render() {
        return (
            <div className="form-container">

                    <img className="img placeholder" src={this.state.image} alt="current pic" />
                
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

                <Link to="/">
                    <button hidden={!this.state.show} className="add" onClick={(e) => this.addButton(e)}>Add</button>
                </Link>

                <button hidden={this.state.show} className="save" onClick={this.saveChanges}>Save Changes</button>
                
            </div>
        )
    }
}