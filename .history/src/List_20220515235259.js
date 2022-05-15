import React from 'react';

const List = ({people}) => {
  return (
    <>
{people.map((person) =>{
  const {id, name, age, image} = person;
  return <article key={}></article>
})}    </>
  );
};

export default List;
