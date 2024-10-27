import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import style from './form.module.css'
  
  function formAddProduct({inputsHandler, submitHandler, inputs}) {

    return (
      <div className={style.form}>
      <Form onSubmit={submitHandler} className={style.miniForm}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Название</Form.Label>
          <Form.Control name="title" type="text" placeholder="Введите название" onChange={inputsHandler} value={inputs.title}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Описание</Form.Label>
          <Form.Control name="text" type="text" placeholder="Введите описание" onChange={inputsHandler} value={inputs.text}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicIMG">
          <Form.Label>Изображение</Form.Label>
          <Form.Control name="img" type="text" placeholder="Вставьте ссылку на изображение" onChange={inputsHandler} value={inputs.img}/>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Цена</Form.Label>
          <Form.Control name="price" type="text" placeholder="Введите стоимость" onChange={inputsHandler} value={inputs.price}/>
        </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit" className={style.button}>
          Добавить
        </Button>
      </Form>
      </div>
    );
  }
  
  export default formAddProduct;