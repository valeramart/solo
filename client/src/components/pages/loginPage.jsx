import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import style from './loginPage.module.css'


function BasicExample({ loginHandler}) {
  // const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={style.form}>
    <Form onSubmit={(e) => loginHandler(e, formData)} className={style.miniForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email" name="email" placeholder="Введите адрес электронной почты" value={formData.email}
              onChange={handleChange}/>
        <Form.Text className="text-muted">
        Мы никогда не передадим ваш адрес электронной почты кому-либо еще.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type={'password'}
                name="password"
                placeholder="Введите ваш пароль"
                value={formData.password}
                onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className={style.button}> 
        Войти
      </Button>
    </Form>
    </div>
  );

}

export default BasicExample;