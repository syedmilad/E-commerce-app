import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import List from "../../components/list/List";
import './Products.scss'
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const carId = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setsort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${carId}`);
  const onChangeHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item)=> item !== value))
  } 
  console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products Categoreis</h2>
        {data?.map((item)=> (
          <div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={onChangeHandler} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
        ))}
        </div>
        <div className="filterItem">
          <h2>filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc " name="price" onChange={(e)=>setsort("asc")} />
            <label htmlFor="acs">Price (lowest price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setsort("desc")} />
            <label htmlFor="desc">Price (highest price)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={carId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
