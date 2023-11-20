import './filter.scss'

const Filter = ({ minCost, maxCost, onMinCostSelected, onMaxCostSelected }) => {

  return (
    <div className="filter">
      <p>Цена</p>
      <input
        type="text"
        value={minCost || ''}
        onChange={(e) => onMinCostSelected(Number(e.target.value))}
        placeholder='от'
      />
      <span>-</span>
      <input
        type="text"
        value={maxCost || ''}
        onChange={(e) => onMaxCostSelected(Number(e.target.value))}
        placeholder='до'
      />
    </div>
  );
};

export default Filter;