import axios from "axios";
import React, { Component } from "react";
import apple from "./apple.jpeg";
import Cart from "./cart";
import CustomerUpdate from "./customerUpdate";
import HomePage from "./homepage";
import Update from "./update";

class Customer extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("/products").then(res => {
      this.setState({ products: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {this.state.products.map(product => (
              <div key={product.id} className="column">
                <div className={product.quantity === 0 ? "card c" : "card"}>
                  <img src={product.image} alt="image" className="img" />
                  <div className="card-title">
                    <h4>{product.title}</h4>
                  </div>

                  <h5 className="color">₹ {product.price}</h5>
                  <Cart p_qty={product.quantity} />
                  <h6 className="card-text">
                    <CustomerUpdate
                      p_id={product.id}
                      p_qty={product.quantity}
                    />
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Customer;
