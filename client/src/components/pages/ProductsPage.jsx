import React from 'react'
import { useEffect, useState } from 'react';
import EntrieCard from '../ui/EntrieCard';
import FormAddProduct from '../ui/formAddProduct';
import axios from 'axios';
import List from '../ui/list';
import axiosInstance, { setAccessToken } from '../../services/axiosInstance';

const initInputsState = {
  title: "",
  text: "",
  img: "",
  price: "",
  id: 0,
};

export default function ProductPage({ user }) {
  const [inputs, setInputs] = useState(initInputsState);
  const [entries, setEntries] = useState([]);

  function inputsHandler(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // useEffetc на получение всех записей из бд
  useEffect(() => {
    (async function () {
      const { data } = await axiosInstance.get('/products') 
      setEntries(() => [...data.products])
    })()
  }, [])

  // useEffetc на добавление записи в бд
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const { data, status } = await axiosInstance.post('/products/new', inputs)
      if (status === 200) {
        setEntries((prev) => [...prev, data]);
        setInputs((prev) => ({ ...prev, title: "", text: "", img: "", price: ""}));
      } else {
        console.log('Не удалось получить')
        setEntries((prev) => [...prev, { title: 'ОШИБКА' }]);
      }
    } catch (error) {
      console.log('Ошибка получения', error)
    }
  }

  async function deleteHandler(id) {
    try {
      const { data } = await axiosInstance.delete(`/products/${id}`)
      if (data === 'Запись успешно удалена.') {
        setEntries((prev) => prev.filter((el) => el.id !== id));
      } else {
        console.log('Непредвиденная ошибка удаления')
      }
    } catch (error) {
      console.log('Ошибка удаления', error)
    }
  }

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