import React, { Component } from "react";
import Style from "./Home.module.css";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div className={Style.row}>
          {this.props.product.map((item, index) => {
            return (
              <button
                style={{ display: "inline-block" }}
                key={index}
                onClick={() => {
                  this.props.itemExchange(item);
                }}
              >
                <img src={item.url} alt="" className={Style.img} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
