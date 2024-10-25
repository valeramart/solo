import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListUser from '../ui/listUser';
import axiosInstance, { setAccessToken } from '../../services/axiosInstance';



export default function ProductUser() {
  const [entries, setEntries] = useState([]);

  // useEffetc на получение всех записей из бд
  useEffect(() => {
    (async function () {
      const { data } = await axiosInstance.get('/products') 
      setEntries(() => [...data.products])
    })()
  }, [])

  async function productInBasketUser(e, id) {
    e.preventDefault();
    try {
     await axiosInstance.post(`/productsUser/${id}`)
    } catch (error) {
      console.log('Ошибка получения', error)
    }
  }

  return (
    <>
        <ListUser entries={entries} productInBasketUser={productInBasketUser} />
      </>
  );
}