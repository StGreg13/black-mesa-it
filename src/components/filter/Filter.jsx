import './filter.scss'
import React, { useState } from 'react';

const Filter = ({ minCost, maxCost, onMinCostSelected, onMaxCostSelected }) => {
  const [tempMinCost, setTempMinCost] = useState(minCost);
  const [tempMaxCost, setTempMaxCost] = useState(maxCost);

  const handleApplyFilter = () => {
    onMinCostSelected(tempMinCost);
    onMaxCostSelected(tempMaxCost);
  };

  return (
    <div className="filter">
      <p>Цена</p>
      <input
        type="text"
        value={tempMinCost || ''}
        onChange={(e) => setTempMinCost(Number(e.target.value))}
        placeholder='от'
      />
      <span>-</span>
      <input
        type="text"
        value={tempMaxCost || ''}
        onChange={(e) => setTempMaxCost(Number(e.target.value))}
        placeholder='до'
      />
      {/*<button onClick={handleApplyFilter}>Применить</button>*/}
    </div>
  );
};

export default Filter;