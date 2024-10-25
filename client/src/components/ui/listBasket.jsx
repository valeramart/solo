import EntrieCardBasket from './EntrieCardBasket';

export default function List({ entriesBasket, deleteBasket }) {
  // * key - нужен только реакту
  // ! Сами его мы использовать не можем
  // * key Должен быть:
  // * 1 уникальный
  // * 2 стабильный
  // ! индексы в map не используем
  return (
    <>
      <h1>Список товаров</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {entriesBasket.map((el, i) => (
          <EntrieCardBasket key={el.id} el={el.Product} deleteBasket={deleteBasket}/>
        ))}
      </div>
    </>
  );
}