"use client"
import { useEffect, useState } from 'react';
import Catalog from '../components/catalog/Catalog';
import Filter from '../components/filter/Filter';
import FoodList from '../components/foodList/foodList';
import {getFood} from "../services/services";

function App() {
  const [category, setCategory] = useState('pizza');
  const [menuList, setMenuList] = useState([]);
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [filteredMenuList, setFilteredMenuList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFood(category);
        setMenuList(data)
      } catch (error) {
        // Обработка ошибок при получении данных
        console.error("Error in fetchData:", error.message);
      }
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    console.log("menuList", menuList)
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
      />
    </div>
  );
}

export default App;