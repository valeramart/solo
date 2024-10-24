// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';

// function OneProduct({ el, deleteHandler, addLike }) {
//   const navigate = useNavigate()
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="austro.gif" />
//       <Card.Body>
//         <Card.Title>{el.title ? el.title : 'Нет титула'}</Card.Title>
//         <Card.Text>{el.text ? el.text: 'Нет текста'}</Card.Text>
//         <Button variant="warning" 
//           onClick={() => navigate(`/list/${el.id}`)}
//         >Подробнее</Button>
//         <Button variant="danger" 
//           onClick={() => deleteHandler(el.id)}
//         >Удалить</Button>
//         <Button variant="success" onClick={() => addLike(el.id)}>
//           {el.like ? `❤️️ ${el.like}` : '💛 0'}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default OneProduct;