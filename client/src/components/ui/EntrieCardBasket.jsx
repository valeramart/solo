import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function EntrieCardBasket({el, deleteBasket}) {
  function imageHandler(e) {
    e.target.src = 'default2.jpg';
  }
  return (
    <Card style={{ 
      width: '18rem',
      margin: '10px',
       }}>
      <Card.Img variant="top" onError={imageHandler}
            src={el.img || 'default2.jpg'} style={{
              maxWidth: '300px',
              height: '180px',
            }}
 />
      <Card.Body style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       }}>
        <Card.Title>{el.title ? el.title : 'Нет титула'}</Card.Title>
        <Card.Text 
        style={{ 
          textAlign: 'justify',
          height: '270px',}}
        >{el.text ? el.text: 'Нет текста'}</Card.Text>
        <Card.Text>{el.price ? el.price + ' ₽' : 'Нет цены'}</Card.Text>
      
        <Button variant="danger"
          onClick={() => deleteBasket(el.id)} 
          style={{ 
            width: '100px',
            borderColor: 'black',
            boxShadow: '5px 5px 5px grey',
           }}
        >Удалить</Button>
      </Card.Body>
    </Card>

  );
}

export default EntrieCardBasket;
