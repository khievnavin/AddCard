import React from "react";
import { Card } from "./Card";

interface User {
  name: string;
  image: string;
}

const UserItems: User[] = [
  { name: "John", image: "/Picasso.jpg" },
  { name: "Leap", image: "/Picasso.jpg" },
  { name: "Lang", image: "/Picasso.jpg" },
  { name: "Rothna", image: "/Picasso.jpg" },
  { name: "Thorn", image: "/Picasso.jpg" },
];

const CardList = () => {
  return (
    <div>

      {UserItems.map((item, index) => (
        <Card name={item.name} key={index} image={item.image} />
      ))}
    </div>
  );

};

export { CardList };
