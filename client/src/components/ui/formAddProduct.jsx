// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// function formAddProduct() {
//   // * Управляемая форма - это форма, у которой
//   // * её value и изменение value зависят от стейта

//   return (
//     <Form >
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Title</Form.Label>
//         <Form.Control 
//           name="title" type="text" placeholder="Enter email" 
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Text</Form.Label>
//         <Form.Control 
//           name="text" type="text" placeholder="Password" 
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default formAddProduct;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <Form onSubmit={(e) => loginHandler(e, formData)}>
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
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}

export default BasicExample;