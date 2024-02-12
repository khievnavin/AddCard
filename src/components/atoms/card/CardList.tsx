import React from "react";
import { Card } from "./Card";
import { User } from "@/app/page";

interface CardListProps {
  items: User[];
  selectCard: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
}

const CardList = ({ items, selectCard, onSelectCard }: CardListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card
          name={item.username}
          key={index}
          image={item.profile}
          onSelectCard={onSelectCard}
          selectCard={selectCard}
        />
      ))}
    </div>
  );
};

export { CardList };
