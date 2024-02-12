import React from "react";
import { Card } from "./Card";
import { User } from "@/app/page";

const CardList = ({items}: {items: User[]}) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card name={item.username} key={index} image={item.profile} />
      ))}
    </div>
  );

};

export { CardList };
