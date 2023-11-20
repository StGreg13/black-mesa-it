"use client"
import { useEffect, useState } from 'react';
import Catalog from '../components/catalog/Catalog';
import Filter from '../components/filter/Filter';
import FoodList from '../components/foodList/FoodList';
import {getFood} from "../services/services";

function App() {
  const [category, setCategory] = useState('pizza');
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [filteredMenuList, setFilteredMenuList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setMenuList([])
      try {
        const data = await getFood(category);
        setMenuList(data)
      } catch (error) {
        console.error("Error in fetchData:", error.message);
      }
      setLoading(false)
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    const filteredList = menuList.filter((item) => {
      const itemCost = item.cost || 0;
      return (minCost === 0 || itemCost >= minCost) && (maxCost === 0 || itemCost <= maxCost);
    });

    setFilteredMenuList(filteredList);
  }, [menuList, minCost, maxCost]);

  return (
    <div>
      <Catalog
        category={category}
        onCategorySelect={(selected) => setCategory(selected)}
      />
      <Filter
        minCost={minCost}
        maxCost={maxCost}
        onMinCostSelected={(selected) => setMinCost(selected)}
        onMaxCostSelected={(selected) => setMaxCost(selected)}
      />
      <FoodList
        menuList={filteredMenuList}
        loading={loading}
      />
    </div>
  );
}

export default App;