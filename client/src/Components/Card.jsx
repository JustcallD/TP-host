import React from "react";

import style from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={style.cardContainer}>
        <img src={props.Image} alt={props.name} />
        <div className={style.subContainer}>
          <div>
            <h3>{props.name}</h3>
            <span>{props.rating}</span>
          </div>
          <div>
            <h5>Pizza, Pasta, Fast Food, Beverages</h5>
            <h5>{props.price}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
