import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EntrieCardBasket({el, deleteBasket}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.title ? el.title : 'Нет титула'}</Card.Title>
        <Card.Text>{el.text ? el.text: 'Нет текста'}</Card.Text>
        <Card.Text>{el.price ? el.price + ' ₽' : 'Нет цены'}</Card.Text>
        <Button variant="danger" 
          onClick={() => deleteBasket(el.id)}
        >Удалить</Button>
      </Card.Body>
    </Card>
  );
}

export default EntrieCardBasket;