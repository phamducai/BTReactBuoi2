import React, { Component } from "react";
import Modal from "../asset/img/model.jpg";

import Style from "./ProductItem.module.css";

export default class ProductItem extends Component {
  render() {
    return (
      <div className={Style.row}>
        <div className={Style.positon}>
          {" "}
          <img src={Modal} alt="" className={Style.img} />
          <img src={this.props.item?.url} alt="" className={Style.abs} />
          <div className={Style.content}>
            <h1>{this.props.item?.name}</h1>
            <p>{this.props.item?.desc}</p>
          </div>
        </div>
        <div>
          {" "}
          <img src={Modal} alt="" className={Style.img} />
        </div>
      </div>
    );
  }
}
