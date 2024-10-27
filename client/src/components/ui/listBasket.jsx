import EntrieCardBasket from './EntrieCardBasket';

export default function List({ entriesBasket, deleteBasket }) {
  return (
    <>
      <h2 style={{marginLeft: '90px', marginTop: '20px'}}>Сюда нам точно надо</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '80px',
      }}>
        {entriesBasket.map((el, i) => (
          <EntrieCardBasket key={el.id} el={el.Product} deleteBasket={deleteBasket}/>
        ))}
      </div>
    </>
  );
}