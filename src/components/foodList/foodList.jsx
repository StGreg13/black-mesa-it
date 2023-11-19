import "./food-list.scss"

import React from 'react';

const FoodList = ({ menuList }) => {
    function renderItems(arr) {
        const itemsList = arr.map((item, i) => (
          <div className="item" key={i}>
              <img src={item.image} alt={item.name} />
              <div className="desc">
                <h3>{item.name}</h3>
                <p>{item.cost} &#8381;</p>
              </div>
          </div>
        ));

        return <div className="items-list">{itemsList}</div>;
    }

    return renderItems(menuList);
};

export default FoodList;