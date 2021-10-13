import './App.css';
import React, { useState, useEffect } from "react";
import Cards from "./components/Cards.js"
const url = 'http://52.26.193.201:3000/products/';

export default function App() {
  let [response, setResp] = useState([]);
  let [productData, setProduct] = useState({});
  let [prodID, setProdID] = useState(1);
  let [photo, setPhoto] = useState();
  if (productData.results !== undefined) {
    console.log('this is :' + productData.results[0].photos[0].url);
    setPhoto(productData.results[0].photos[0].url);
  }

  useEffect(() => {
    async function func() {
      let res = await fetch(`${url}list`);
      let json = await res.json();
      // console.log(json);
      setResp(json);
    };
    func();
  }, [setResp])

  useEffect(() => {
    async function func() {
      let res = await fetch(`${url}1/styles`);
      let json = await res.json();
      // console.log(json);
      setProduct(json);
    };
    func();
  }, [setProduct])

  function handleClick(e) {
    setProdID(e.target);
    console.log(e.target);
  }






  return (
    <div className="App prod-box flex-row">
      <Cards prods={response} onClick={() => { handleClick() }} pic={photo} />
    </div>
  );
}