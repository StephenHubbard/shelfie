import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import Product from "./Components/Product/Product";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";

export default class App extends Component {
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
      .then(res => [
        this.setState({
          products: res.data
        })
      ])
  }

    render() {
      return (
          <div className="App">
            <Header />
            
            <Form
            getNewProductsFn = {() => this.getNewProducts}
            />

            <Dashboard 
            products={this.state.products}
            />
          </div>
      )
  }
}