import React, {Component} from 'react';
import './Product.css';
import { Link } from 'react-router-dom';



export default class Product extends Component {

    deleteBtn() {
        this.props.deleteProductFn(this.props.productObj.id)
        this.props.getNewProductsFn()
    }

    render(props) {
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
                
                <button className="delete" onClick={() => this.deleteBtn()}>Delete</button>

                <Link to={`/add/${this.props.productObj.id}`}>
                    <button className="edit">Edit</button>
                </Link>
            </div> 
        )
    }
}