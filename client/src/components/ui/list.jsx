import EntrieCard from './EntrieCard';

export default function List({ entries, deleteHandler }) {
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
        {entries.map((el, i) => (
          <EntrieCard key={el.id} el={el} deleteHandler={deleteHandler}/>
        ))}
      </div>
    </>
  );
}