import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import "./List.scss";

const List = ({ subCats, maxPrice, sort, catId }) => {
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
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
