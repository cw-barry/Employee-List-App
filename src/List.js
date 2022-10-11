import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        // const {
        //   id: { value: id },
        //   name: { first, last },
        //   dob: { age },
        //   picture: { large: image },
        //   email,
        // } = person;
        // const name = first + ' ' + last;
        const { id, image, name, email, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
