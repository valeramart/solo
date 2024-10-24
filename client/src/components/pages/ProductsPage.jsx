import React from 'react'
import { useEffect, useState } from 'react';
import EntrieCard from '../ui/EntrieCard';
import FormAddProduct from '../ui/formAddProduct';
import axios from 'axios';
import List from '../ui/list';
// import axiosInstance, { setAccessToken } from '../../services/axiosInstance';

const initInputsState = {
  title: "",
  text: "",
  price: "",
  img: "",
  id: 0,
};

export default function ProductPage({ user }) {
  const [inputs, setInputs] = useState(initInputsState);
  const [entries, setEntries] = useState([]);
  const [products, setProducts] = useState([]);


  function inputsHandler(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Мы молодцы!");
    setEntries((prev) => [...prev, { ...inputs, id: Math.random() * 99999 }]);
    setInputs((prev) => ({ ...prev, title: "", text: "", price: "",   img: ""}));
  }

  function deleteHandler(id) {
    setEntries((prev) => prev.filter((el) => el.id !== id));
  }

  // useEffetc на получение всех записей из бд
  useEffect(() => {
  (async function () {
    const { data } = await axios.get('/products') 
    setProducts(() => [...data])
  })()
}, [])

  return (
    <>
    {/* {user.role === "ADMIN" ? (
      <> */}
        <FormAddProduct inputsHandler={inputsHandler} submitHandler={submitHandler} inputs={inputs}/>
        <List entries={entries} deleteHandler={deleteHandler}/>
      </>
    // ) : (
    //   <List entries={entries} deleteHandler={deleteHandler}/>
    // )
    // }
    //     {/* <FormAddProduct inputsHandler={inputsHandler} submitHandler={submitHandler} inputs={inputs}/>
    //     <List entries={entries} deleteHandler={deleteHandler}/> */}
    // </>
  );
}