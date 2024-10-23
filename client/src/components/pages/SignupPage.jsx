import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email" placeholder="Введите адрес электронной почты" />
        <Form.Text className="text-muted">
        Мы никогда не передадим ваш адрес электронной почты кому-либо еще.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="name" placeholder="Введите имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
    </Form>
  );
}

export default BasicExample;