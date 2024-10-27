import EntrieCard from './EntrieCard';

export default function ListUser({ entries, deleteHandler , productInBasket}) {
  // * key - нужен только реакту
  // ! Сами его мы использовать не можем
  // * key Должен быть:
  // * 1 уникальный
  // * 2 стабильный
  // ! индексы в map не используем
  return (
    <>
      <h2 style={{marginLeft: '90px', marginTop: '20px'}}>Куда желаете?</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '80px',
      }}>
        {entries.map((el, i) => (
          <EntrieCard key={el.id} el={el} deleteHandler={deleteHandler} productInBasket={productInBasket}/>
        ))}
      </div>
    </>
  );
}