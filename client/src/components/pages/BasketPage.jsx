import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListBasket from '../ui/listBasket';
import axiosInstance, { setAccessToken } from '../../services/axiosInstance';



export default function Basket() {
  const [entriesBasket, setEntriesBasket] = useState([]);

  // useEffetc на получение всех записей из бд
  useEffect(() => {
    (async function () {
      const { data } = await axiosInstance.get('/basket') 
      setEntriesBasket(() => [...data.allProducts
      ])
    })()
  }, [])

  async function deleteBasket(id) {
    try {
      const { data } = await axiosInstance.delete(`/basket/${id}`)
      if (data === 'Запись успешно удалена.') {
        setEntriesBasket((prev) => prev.filter((el) => el.Product.id !== id));
      } else {
        console.log('Непредвиденная ошибка удаления')
      }
    } catch (error) {
      console.log('Ошибка удаления', error)
    }
  }

  return (
    <>
        <ListBasket entriesBasket={entriesBasket} deleteBasket={deleteBasket}/>
      </>
  );
}