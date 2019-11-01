import React, {Component} from 'react';
import './Product.css';


export default class Product extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className="product">

                {this.props.productObj ? (
                <div>
                    <img className="img" src={this.props.productObj.image} alt={this.props.productObj.image} />
                    <div className="product-text">
                        {this.props.productObj.name}
                        <hr />
                        ${this.props.productObj.price}
                    </div>
                </div>
                
                ) : null }
                
                <button className="delete">Delete</button>
                <button className="edit">Edit</button>
            </div>
        )
    }
}