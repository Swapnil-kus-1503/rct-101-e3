import axios from "axios";
import React from "react";
import Product from "./Product/Product";

const Products = () => {
  const [data,setData]=React.useState([]);

  React.useEffect(()=>{
    axios({
      url:"http://localhost:8080/products",
    }).then((res)=>{
      console.log(res.data)
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
  <div>
    <Product/>
    {data.map((list)=>(
    <div key={list.id}>
      <div>{list.name}</div>
      <div>{list.description}</div>
      </div>
    ))}
  </div>
  )
};

export default Products;
