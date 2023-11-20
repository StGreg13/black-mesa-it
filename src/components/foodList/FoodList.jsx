import "./food-list.scss"

import React from 'react';
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Image from "next/image";

const FoodList = ({ menuList, loading }) => {
    function renderItems(arr) {
        const itemsList = arr.map((item) => (
          <div className="item" key={item.id}>
              <div className="img">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout='fill'
                  objectFit='cover'
                  style={{ width: '100%' }}
                />
              </div>
              <div className="desc">
                <h3>{item.name}</h3>
                <p>{item.cost} &#8381;</p>
              </div>
          </div>
        ));

        return <div className="items-list">{itemsList}</div>;
    }

    const items = renderItems(menuList)
    const errorMessage = (menuList.length === 0 && !loading)? <ErrorMessage text="Похоже всё уже разобрали, попробуйте поискать что-то ещё"/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
      <div className="container">
        {errorMessage}
        {spinner}
        {items}
      </div>
    );
};

export default FoodList;