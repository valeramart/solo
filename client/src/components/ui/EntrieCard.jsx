import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './EntrieCard.module.css'


function EntrieCard({el, deleteHandler , productInBasket}) {
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
        <div style={{ 
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
       }}>
        <Button  onClick={(e) => productInBasket(e, el.id)} className={style.buttonWant}
        >Хочу</Button>
        <Button variant="danger"
          onClick={() => deleteHandler(el.id)} 
          style={{ 
            width: '100px',
            borderColor: 'black',
            boxShadow: '5px 5px 5px grey',
            borderRadius: '10px',
           }}
        >Удалить</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EntrieCard;