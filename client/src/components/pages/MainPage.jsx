import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import style from './main.module.css'
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function AllCollapseExample({user}) {
  const navigate = useNavigate();
  return (
    <>
        {/* <div>Привет, дорогой друг!</div>
            <div>Ты попал на главную страницу нашего сайта. Можешь подробнее ознакомиться с её содержимым:</div>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Откройте коллекцию путешествий!</Accordion.Header>
        <Accordion.Body>
          <div>На Земле много удивительных мест, от которых захватывает дух!</div>
          <div>'ХОЧУ В ОТПУСК' предоставляет любителям путешествовать возможность увидеть весь мир, восхититься его красотой, прочувствовать историю, традиции, попробовать изыски и специфику местной кухни, позволяет отрешиться от повседневных проблем и воспарить над суетой, путешествуя по миру.</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Для настроения</Accordion.Header>
        <Accordion.Body>
        <div>Здесь просто слова для поднятия настроения</div>
        <div>Не переживайте, если у вас не получилось полностью реализовать функционал задуманного сайта! Все мы учимся и совершаем ошибки. Это уже большой опыт для нас))) Дальше будут более масштабные проекты. Дальше мы сможем намного быстрее прописывать все функции и не подсматривать в лекции. Мы итак прошли большой путь. Дальше - больше.</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    {user ? (        <div className={style.wrap}>
        <div as={RouterLink} to="/" className={style.button} onClick={()  => navigate('/basket')}>В отпуск</div>
    </div>) : (        <div className={style.wrap}>
        <div as={RouterLink} to="/" className={style.button} onClick={()  => navigate('/login')}>В отпуск</div>
    </div>)}
        {/* <div className={style.wrap}>
        <div as={RouterLink} to="/" className={style.button} onClick={()  => navigate('/basket')}>В отпуск</div>
    </div> */}

    </>
  );
}

export default AllCollapseExample;