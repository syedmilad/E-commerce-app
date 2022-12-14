import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import "./FeaturedProducts.scss";
// import axios from "axios";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     img2: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     title: "long Sleeve graphic t-shirt",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     title: "Coat",
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     title: "shirt",
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.pexels.com/photos/10535611/pexels-photo-10535611.jpeg?auto=compress&cs=tinysrgb&w=1200",
  //     title: "hat",
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} products </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, saepe
          velit. Neque, temporibus esse. Dolores quasi animi cum nemo tenetur a
          reprehenderit quas veniam optio assumenda fuga, possimus sunt commodi?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong"
          : loading
          ? "loading"
          : data && data.map((item) => <Card item={item} key={item.id} />)}
        {/* <div>
          {data && data.map((item) => <Card item={item} key={item.id} />)}
          <div>{JSON.stringify(item)}</div>
        </div> */}
      </div>
      {/* data.map((item) => <Card item={item} key={item.id} />) */}
    </div>
  );
};

export default FeaturedProducts;
