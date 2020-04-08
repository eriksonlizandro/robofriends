import React from 'react';
import Card from './card';
import './CardList.css'; 

//Here we created a function
//This function creates a loop using .map
//And it gets the information from the file "robots"
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i} //This key is used to identfy the cards
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
