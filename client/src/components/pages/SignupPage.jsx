import { useState } from 'react';  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import style from './loginPage.module.css'


function BasicExample({signupHandler}) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div className={style.form}>
    <Form onSubmit={(e) => signupHandler(e, formData)} className={style.miniForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email"
              name="email"
              placeholder="Введите ваш email"
              value={formData.email}
              onChange={handleChange} />
        <Form.Text className="text-muted">
        Мы никогда не передадим ваш адрес электронной почты кому-либо еще.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="text"
              name="name"
              placeholder="Введите имя пользователя"
              value={formData.name}
              onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password"
              name="password"
              placeholder="Введите пароль"
              value={formData.password}
              onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className={style.button} >
        Зарегистрироваться
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;